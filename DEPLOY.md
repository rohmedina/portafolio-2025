# 🚀 Guía de Deploy - Portfolio Vue.js + Node.js Backend

Esta guía te ayudará a desplegar tu portfolio con el nuevo backend Node.js en producción.

## 📋 Prerrequisitos

- ✅ Build de producción generado (`npm run build`)
- ✅ Acceso al servidor web (cPanel, FTP, SSH)
- ✅ Node.js instalado en el servidor (para el backend)

## 🎯 Proceso de Deploy

### 1. 📦 Frontend (Archivos estáticos)

Los archivos del frontend están en la carpeta `dist/` y deben subirse al directorio público de tu servidor web:

#### Opción A: cPanel File Manager
1. Accede a cPanel → File Manager
2. Navega a `public_html/` (o el directorio raíz de tu dominio)
3. Sube todos los archivos de la carpeta `dist/`
4. Asegúrate de que `index.html` esté en la raíz

#### Opción B: FTP/SFTP
```bash
# Usando scp (si tienes acceso SSH)
scp -r dist/* usuario@servidor:/path/to/public_html/

# O usando rsync
rsync -avz dist/ usuario@servidor:/path/to/public_html/
```

### 2. 🖥️ Backend Node.js

El backend debe ejecutarse en un puerto separado y ser accesible desde tu dominio.

#### Archivos a subir:
```
backend/
├── server.js
├── package.json
├── package-lock.json
├── .env.production
└── README.md
```

#### Pasos de instalación:

1. **Subir archivos del backend** a una carpeta separada (ej: `/home/usuario/backend/`)

2. **Instalar dependencias:**
```bash
cd /path/to/backend
npm install --production
```

3. **Configurar variables de entorno:**
```bash
# Copiar y editar el archivo de producción
cp .env.production .env
nano .env  # Ajustar si es necesario
```

4. **Iniciar el servidor:**
```bash
# Opción 1: Con PM2 (recomendado)
npm install -g pm2
pm2 start server.js --name "portfolio-backend"
pm2 startup
pm2 save

# Opción 2: Con nohup
nohup node server.js > backend.log 2>&1 &
```

### 3. 🌐 Configuración del Servidor Web

#### Nginx (Recomendado)
Crear un archivo de configuración para el proxy reverso:

```nginx
# /etc/nginx/sites-available/rmedinadev.com
server {
    listen 80;
    server_name rmedinadev.com www.rmedinadev.com;
    
    # Frontend estático
    location / {
        root /path/to/public_html;
        try_files $uri $uri/ /index.html;
    }
    
    # Backend API
    location /api/ {
        proxy_pass http://localhost:3001;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_cache_bypass $http_upgrade;
    }
}
```

#### Apache (.htaccess)
Si usas Apache, crea/actualiza el archivo `.htaccess` en la raíz:

```apache
# Rewrite para SPA
RewriteEngine On
RewriteBase /

# Handle Angular and Vue.js routes
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule . /index.html [L]

# Proxy para API (si mod_proxy está disponible)
RewriteRule ^api/(.*)$ http://localhost:3001/api/$1 [P,L]
```

### 4. 🔒 SSL/HTTPS (Recomendado)

```bash
# Con Certbot (Let's Encrypt)
sudo certbot --nginx -d rmedinadev.com -d www.rmedinadev.com
```

## 🧪 Verificación del Deploy

### 1. Frontend
- ✅ Visita `https://rmedinadev.com`
- ✅ Verifica que la página carga correctamente
- ✅ Navega por las diferentes secciones

### 2. Backend
- ✅ Verifica que el backend esté corriendo: `https://rmedinadev.com/api/health`
- ✅ Prueba el formulario de contacto
- ✅ Revisa los logs: `pm2 logs portfolio-backend`

## 🔧 Comandos Útiles

```bash
# Ver estado del backend
pm2 status
pm2 logs portfolio-backend

# Reiniciar backend
pm2 restart portfolio-backend

# Actualizar backend
cd /path/to/backend
git pull  # Si usas Git
npm install --production
pm2 restart portfolio-backend

# Ver logs en tiempo real
pm2 logs portfolio-backend --lines 50
```

## 🚨 Troubleshooting

### Problema: Formulario no funciona
- ✅ Verifica que el backend esté corriendo: `pm2 status`
- ✅ Revisa los logs: `pm2 logs portfolio-backend`
- ✅ Verifica la configuración CORS en `server.js`

### Problema: Error 502 Bad Gateway
- ✅ El backend no está corriendo o no es accesible
- ✅ Verifica la configuración del proxy en Nginx/Apache

### Problema: Rutas del SPA no funcionan
- ✅ Verifica la configuración de rewrite en `.htaccess` o Nginx
- ✅ Asegúrate de que `index.html` esté en la raíz

## 📝 Notas Importantes

1. **Backup**: Siempre haz backup antes de hacer deploy
2. **Variables de entorno**: Nunca subas archivos `.env` con datos sensibles
3. **Logs**: Monitorea los logs regularmente
4. **Updates**: Usa `pm2` para actualizaciones sin downtime
5. **Security**: Mantén Node.js y las dependencias actualizadas

## 🎉 ¡Deploy Completado!

Tu portfolio ahora debería estar funcionando en producción con:
- ✅ Frontend Vue.js optimizado
- ✅ Backend Node.js robusto
- ✅ Formulario de contacto funcional
- ✅ SSL/HTTPS configurado