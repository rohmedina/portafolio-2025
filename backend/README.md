# Backend Portfolio - Rodrigo Medina

Backend Node.js con Express para manejar el formulario de contacto del portfolio, reemplazando el proxy PHP problemático.

## 🚀 Características

- **Express.js** - Framework web rápido y minimalista
- **Validación robusta** - Validación de datos con express-validator
- **Seguridad** - Helmet, CORS, Rate limiting
- **Integración N8N** - Envío automático a webhook de N8N
- **Manejo de errores** - Respuestas de error específicas y útiles
- **Logging** - Registro detallado de requests y errores

## 📋 Requisitos

- Node.js >= 16.0.0
- npm o yarn
- Acceso al webhook de N8N

## 🛠️ Instalación

### 1. Instalar dependencias

```bash
cd backend
npm install
```

### 2. Configurar variables de entorno

Copia el archivo de ejemplo y configura las variables:

```bash
cp .env.example .env
```

Edita el archivo `.env`:

```env
# Puerto del servidor
PORT=3001

# URL del webhook de N8N
N8N_WEBHOOK_URL=https://n8n.rmedinadev.com/webhook/contacto-formulario

# Configuración CORS
FRONTEND_URL=https://rmedinadev.com

# Configuración de rate limiting
RATE_LIMIT_WINDOW_MS=900000
RATE_LIMIT_MAX_REQUESTS=5

# Configuración de desarrollo
NODE_ENV=production
```

### 3. Ejecutar en desarrollo

```bash
npm run dev
```

### 4. Ejecutar en producción

```bash
npm start
```

## 🌐 Endpoints

### GET /health
Endpoint de verificación de salud del servidor.

**Respuesta:**
```json
{
  "success": true,
  "message": "Backend funcionando correctamente",
  "timestamp": "2024-01-01T00:00:00.000Z",
  "version": "1.0.0"
}
```

### POST /api/contact
Endpoint principal para el formulario de contacto.

**Cuerpo de la petición:**
```json
{
  "name": "Juan Pérez",
  "email": "juan@example.com",
  "subject": "spa-development",
  "message": "Hola, me interesa desarrollar una aplicación web..."
}
```

**Respuesta exitosa:**
```json
{
  "success": true,
  "message": "Mensaje enviado correctamente. Te contactaré pronto.",
  "id": "contact_1704067200000",
  "timestamp": "2024-01-01T00:00:00.000Z"
}
```

**Respuesta de error:**
```json
{
  "success": false,
  "error": "Descripción del error",
  "code": "ERROR_CODE"
}
```

## 🔒 Seguridad

### Rate Limiting
- **Ventana:** 15 minutos (configurable)
- **Máximo:** 5 requests por ventana (configurable)
- **Respuesta:** Error 429 con tiempo de espera

### Validaciones
- **Nombre:** 2-100 caracteres, solo letras y espacios
- **Email:** Formato válido y normalizado
- **Asunto:** Máximo 200 caracteres (opcional)
- **Mensaje:** 10-2000 caracteres

### CORS
Configurado para permitir requests desde:
- `https://rmedinadev.com`
- `http://localhost:5173` (desarrollo)
- `http://localhost:3000` (desarrollo)

## 🚀 Despliegue

### Opción 1: cPanel con Node.js

1. **Subir archivos:**
   - Sube la carpeta `backend` a tu cPanel
   - Asegúrate de que `server.js` esté en la raíz

2. **Configurar Node.js App:**
   - Ve a "Node.js Apps" en cPanel
   - Crea nueva aplicación
   - Selecciona la versión de Node.js (>= 16)
   - Establece el directorio de la aplicación
   - Archivo de inicio: `server.js`

3. **Variables de entorno:**
   - Configura las variables en la interfaz de cPanel
   - O crea el archivo `.env` en el servidor

4. **Instalar dependencias:**
   ```bash
   npm install --production
   ```

5. **Iniciar aplicación:**
   - Usa el botón "Start" en cPanel
   - O ejecuta: `npm start`

### Opción 2: VPS/Servidor dedicado

1. **Clonar y configurar:**
   ```bash
   git clone <tu-repo>
   cd backend
   npm install --production
   ```

2. **Configurar PM2 (recomendado):**
   ```bash
   npm install -g pm2
   pm2 start server.js --name "portfolio-backend"
   pm2 startup
   pm2 save
   ```

3. **Configurar proxy reverso (Nginx):**
   ```nginx
   location /api/ {
       proxy_pass http://localhost:3001/api/;
       proxy_http_version 1.1;
       proxy_set_header Upgrade $http_upgrade;
       proxy_set_header Connection 'upgrade';
       proxy_set_header Host $host;
       proxy_set_header X-Real-IP $remote_addr;
       proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
       proxy_set_header X-Forwarded-Proto $scheme;
       proxy_cache_bypass $http_upgrade;
   }
   ```

### Opción 3: Servicios en la nube

#### Vercel
```json
// vercel.json
{
  "version": 2,
  "builds": [
    {
      "src": "backend/server.js",
      "use": "@vercel/node"
    }
  ],
  "routes": [
    {
      "src": "/api/(.*)",
      "dest": "backend/server.js"
    }
  ]
}
```

#### Railway/Render
- Conecta tu repositorio
- Configura las variables de entorno
- El servicio se desplegará automáticamente

## 🔧 Configuración del Frontend

El frontend ya está configurado para usar el backend. Asegúrate de que:

1. **En desarrollo:** El backend esté corriendo en `http://localhost:3001`
2. **En producción:** El backend esté disponible en `https://rmedinadev.com/api/contact`

## 📊 Monitoreo y Logs

### Logs del servidor
```bash
# Ver logs en tiempo real (PM2)
pm2 logs portfolio-backend

# Ver logs específicos
pm2 logs portfolio-backend --lines 100
```

### Métricas importantes
- Requests por minuto al endpoint `/api/contact`
- Tasa de errores 4xx/5xx
- Tiempo de respuesta promedio
- Disponibilidad del webhook N8N

## 🐛 Solución de problemas

### Error: "Failed to fetch"
- Verificar que el backend esté corriendo
- Comprobar configuración CORS
- Revisar URL del endpoint

### Error: "SERVICE_UNAVAILABLE"
- Verificar conectividad con N8N
- Comprobar URL del webhook
- Revisar logs del servidor

### Error: "Demasiadas solicitudes"
- El usuario ha excedido el rate limit
- Esperar 15 minutos o ajustar configuración

### Error 500 interno
- Revisar logs del servidor
- Verificar variables de entorno
- Comprobar conectividad con N8N

## 📝 Notas adicionales

- El backend reemplaza completamente el `proxy-n8n.php`
- Mantiene la misma funcionalidad pero con mejor manejo de errores
- Incluye validaciones más robustas
- Proporciona mejor experiencia de usuario con mensajes específicos

## 🤝 Contribuir

1. Fork el proyecto
2. Crea una rama para tu feature
3. Commit tus cambios
4. Push a la rama
5. Abre un Pull Request