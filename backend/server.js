import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import rateLimit from 'express-rate-limit';
import { body, validationResult } from 'express-validator';
import axios from 'axios';
import https from 'https';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

// Configuración de seguridad
app.use(helmet({
  crossOriginResourcePolicy: { policy: "cross-origin" }
}));

// Configuración CORS
const corsOptions = {
  origin: [
    'https://rmedinadev.com',
    'http://localhost:5173',
    'http://localhost:3000',
    process.env.FRONTEND_URL
  ].filter(Boolean),
  methods: ['GET', 'POST', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Accept', 'Authorization'],
  credentials: true
};

app.use(cors(corsOptions));

// Middleware para parsear JSON
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true, limit: '10mb' }));

// Rate limiting
const contactLimiter = rateLimit({
  windowMs: parseInt(process.env.RATE_LIMIT_WINDOW_MS) || 15 * 60 * 1000, // 15 minutos
  max: parseInt(process.env.RATE_LIMIT_MAX_REQUESTS) || 5, // máximo 5 requests por ventana
  message: {
    success: false,
    error: 'Demasiadas solicitudes. Intenta nuevamente en 15 minutos.',
    retryAfter: 15 * 60 * 1000
  },
  standardHeaders: true,
  legacyHeaders: false,
});

// Middleware de logging
app.use((req, res, next) => {
  console.log(`${new Date().toISOString()} - ${req.method} ${req.path} - IP: ${req.ip}`);
  next();
});

// Validaciones para el formulario de contacto
const contactValidation = [
  body('name')
    .trim()
    .isLength({ min: 2, max: 100 })
    .withMessage('El nombre debe tener entre 2 y 100 caracteres')
    .matches(/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/)
    .withMessage('El nombre solo puede contener letras y espacios'),
  
  body('email')
    .isEmail()
    .normalizeEmail()
    .withMessage('Debe proporcionar un email válido'),
  
  body('subject')
    .optional()
    .trim()
    .isLength({ max: 200 })
    .withMessage('El asunto no puede exceder 200 caracteres'),
  
  body('message')
    .trim()
    .isLength({ min: 10, max: 2000 })
    .withMessage('El mensaje debe tener entre 10 y 2000 caracteres')
];

// Endpoint de salud
app.get('/health', (req, res) => {
  res.json({
    success: true,
    message: 'Backend funcionando correctamente',
    timestamp: new Date().toISOString(),
    version: '1.0.0'
  });
});

// Endpoint principal para el formulario de contacto
app.post('/api/contact', contactLimiter, contactValidation, async (req, res) => {
  try {
    // Verificar errores de validación
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        success: false,
        error: 'Datos de entrada inválidos',
        details: errors.array()
      });
    }

    const { name, email, subject, message } = req.body;

    // Preparar datos para N8N
    const contactData = {
      name: name.trim(),
      email: email.toLowerCase().trim(),
      subject: subject?.trim() || 'Contacto desde portfolio',
      message: message.trim(),
      timestamp: new Date().toISOString(),
      clientIP: req.ip || req.connection.remoteAddress,
      userAgent: req.get('User-Agent') || 'unknown',
      source: 'portfolio-backend'
    };

    // Configurar axios para ignorar certificados auto-firmados en desarrollo
    const httpsAgent = new https.Agent({
      rejectUnauthorized: false
    })

    // Configurar datos para query parameters
    const queryParams = new URLSearchParams({
      name: contactData.name,
      email: contactData.email,
      subject: contactData.subject || 'Contacto desde Portfolio',
      message: contactData.message,
      timestamp: contactData.timestamp,
      clientIP: contactData.clientIP,
      userAgent: contactData.userAgent,
      source: contactData.source
    });

    console.log('📤 Enviando datos a N8N via GET...');
    console.log('🔗 URL:', `${process.env.N8N_WEBHOOK_URL}?${queryParams.toString().substring(0, 100)}...`);

    // Enviar usando GET con query parameters
    const n8nResponse = await axios.get(
      `${process.env.N8N_WEBHOOK_URL}?${queryParams.toString()}`,
      {
        headers: {
          'Accept': 'application/json',
          'User-Agent': 'Portfolio-Backend/1.0'
        },
        timeout: 30000,
        httpsAgent: httpsAgent
      }
    );

    console.log('✅ N8N respondió:', n8nResponse.status);

    // Verificar si n8n devolvió errores de validación
    if (n8nResponse.data && n8nResponse.data.success === false) {
      console.log('❌ N8N devolvió error de validación:', n8nResponse.data);
      return res.status(400).json({
        success: false,
        error: 'Error en validación de datos',
        message: n8nResponse.data.message || 'Los datos del formulario no son válidos',
        details: n8nResponse.data.details || [],
        code: 'VALIDATION_ERROR'
      });
    }

    // Responder al cliente
    res.json({
      success: true,
      message: 'Mensaje enviado correctamente. Te contactaré pronto.',
      id: `contact_${Date.now()}`,
      timestamp: new Date().toISOString()
    });

  } catch (error) {
    console.error('❌ Error al procesar contacto:', error.message);
    
    // Determinar tipo de error
    if (error.code === 'ECONNREFUSED' || error.code === 'ENOTFOUND') {
      return res.status(503).json({
        success: false,
        error: 'Servicio temporalmente no disponible. Intenta nuevamente en unos minutos.',
        code: 'SERVICE_UNAVAILABLE'
      });
    }

    if (error.response?.status === 404) {
      return res.status(502).json({
        success: false,
        error: 'Error de configuración del servidor. Contacta al administrador.',
        code: 'WEBHOOK_NOT_FOUND'
      });
    }

    if (error.code === 'ECONNABORTED') {
      return res.status(504).json({
        success: false,
        error: 'Tiempo de espera agotado. Intenta nuevamente.',
        code: 'TIMEOUT'
      });
    }

    // Error genérico
    res.status(500).json({
      success: false,
      error: 'Error interno del servidor. Intenta nuevamente más tarde.',
      code: 'INTERNAL_ERROR'
    });
  }
});

// Manejo de rutas no encontradas
app.use('*', (req, res) => {
  res.status(404).json({
    success: false,
    error: 'Endpoint no encontrado',
    path: req.originalUrl
  });
});

// Manejo global de errores
app.use((error, req, res) => {
  console.error('💥 Error no manejado:', error)
  res.status(500).json({
    success: false,
    error: 'Error interno del servidor'
  })
})

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`🚀 Servidor backend iniciado en puerto ${PORT}`)
  console.log(`📍 Endpoint de contacto: http://localhost:${PORT}/api/contact`)
  console.log(`🔗 N8N Webhook: ${process.env.N8N_WEBHOOK_URL || 'No configurado'}`)
  console.log(`🌐 CORS habilitado para: ${corsOptions.origin.join(', ')}`)
})

export default app;