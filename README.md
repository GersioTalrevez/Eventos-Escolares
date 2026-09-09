# Eventos Escolares - Fotografía Profesional

Plataforma web para la venta y distribución de copias fotográficas de eventos escolares y sesiones privadas.

## 🚀 Descripción Rápida

Este proyecto es un sitio web de fotografía profesional que permite:
- Mostrar galerías de fotos por categoría
- Acceso privado a sesiones protegidas con contraseña
- Sistema de carrito de compras para copias fotográficas
- Integración con Google Drive para almacenamiento de fotos
- Sistema de pago con Mercado Pago

## ⚠️ SEGURIDAD CRÍTICA

### API Key de Google expuesta (URGENTE)
**Tu API Key estaba en el código fuente:** `AIzaSyAHNvLODt54qLomj14TUPbQyo-KJ_HO4ZM`

**Acciones requeridas:**
1. ✅ **YA HECHO**: Revoca esta clave en [Google Cloud Console](https://console.cloud.google.com/)
2. ✅ **YA HECHO**: Crea `.gitignore` para evitar subir secretos
3. ✅ **YA HECHO**: Crea `.env.example` como plantilla
4. **PRÓXIMO**: Crear un backend Node.js/Python para manejar la API de forma segura

### Contraseñas hardcodeadas (CRÍTICO)
Las contraseñas de clientes están en `index.html` visible en el navegador:
```javascript
// ❌ NO HACER ESTO
const clientes = {
  "familia2026": "ID_CARPETA_FAMILIA_PEREZ",
  "boda1234": "ID_CARPETA_BODA_JUAN_Y_MARIA"
};
```

**Solución:** Implementar backend con autenticación segura (OAuth, JWT).

---

## 📋 Estructura del Proyecto

```
Eventos-Escolares/
├── .gitignore                      # Archivos a ignorar en Git
├── .env.example                    # Plantilla de variables de entorno
├── config/
│   └── config.example.js           # Plantilla de configuración
├── index.html                      # Página principal
├── login.html                      # Panel de login (fotógrafo)
├── panel.html                      # Panel administrativo
├── carrito.html                    # Carrito de compras
├── galeria.html                    # Galería de fotos
├── [otros .html]                   # Más páginas
└── README.md                       # Este archivo
```

---

## 🔒 Configuración de Seguridad

### 1. Crear tu `.env` local (NO versionar)

Copia el archivo de plantilla:
```bash
cp .env.example .env
```

Luego completa con tus credenciales:
```
GOOGLE_API_KEY=tu_clave_real_aqui
PHOTOGRAPHER_EMAIL=molinaoksergio@gmail.com
```

### 2. Crear `config/config.js` (NO versionar)

Copia la plantilla:
```bash
cp config/config.example.js config/config.js
```

Completa con tus valores reales. Este archivo está en `.gitignore`.

### 3. Verificar que los secretos NO estén en Git

```bash
# Verificar que los secretos no están en el historio
git log --all --pretty=format: --name-only | sort -u | grep -E "(\.env|config\.js|secrets)"

# Si encuentras archivos sensibles:
git filter-branch --tree-filter 'rm -f .env config/config.js' HEAD
```

---

## 🛠️ Próximos Pasos (Paso 2 en adelante)

### Paso 2: Crear Backend Seguro
- [ ] Crear servidor Node.js/Python
- [ ] Mover Google Drive API al backend
- [ ] Implementar autenticación JWT
- [ ] Crear base de datos para contraseñas de clientes

### Paso 3: Reorganizar Archivos
- [ ] Crear carpetas `/public`, `/css`, `/js`
- [ ] Separar CSS y JavaScript en archivos externos
- [ ] Implementar módulos reutilizables

### Paso 4: Validación y Testing
- [ ] Validación de datos en cliente y servidor
- [ ] Testing de seguridad
- [ ] HTTPS en producción

---

## 📱 Uso Actual (TEMPORAL)

### Para ver la galería:
1. Abre `index.html` en el navegador
2. Haz clic en una categoría
3. Para acceso privado: usa contraseña `miprueba`

### Para administración:
1. Abre `login.html`
2. Haz clic en "Iniciar sesión con Google"

**⚠️ NOTA:** Esto es un mock. En producción necesitará autenticación real.

---

## 🔑 Credenciales Temporales (Solo desarrollo)

Mientras se construye el backend:

| Concepto | Valor | Estado |
|----------|-------|--------|
| Email fotógrafo | `molinaoksergio@gmail.com` | Usar en `.env` |
| Contraseña "familia2026" | `ID_CARPETA_FAMILIA_PEREZ` | Mover a BD |
| Contraseña "boda1234" | `ID_CARPETA_BODA_JUAN_Y_MARIA` | Mover a BD |

---

## 🚨 Errores Comunes

### ❌ "Error al consultar Google Drive"
**Causa:** API Key no válida o permisos insuficientes

**Solución:**
1. Verifica tu `GOOGLE_API_KEY` en `.env`
2. En Google Cloud Console, habilita "Google Drive API"
3. Crea una clave de tipo "API Key" (no OAuth)

### ❌ "No hay fotos en esta carpeta"
**Causa:** Carpeta de Drive no existe o no contiene imágenes

**Solución:**
1. Verifica el ID de la carpeta en `.env`
2. Asegúrate de que la carpeta tiene archivos de imagen
3. Permisos de Drive API habilitados

---

## 📚 Referencias

- [Google Drive API Docs](https://developers.google.com/drive/api)
- [OWASP Security Cheat Sheet](https://cheatsheetseries.owasp.org/)
- [Environment Variables Best Practices](https://12factor.net/config)

---

## 👤 Autor

**Sergio Ricardo Molina**  
Fotografía Profesional  
Mendoza, Argentina

---

## 📝 Notas de Desarrollo

- Proyecto creado: 5 septiembre 2026
- Última actualización: 9 septiembre 2026
- Estado: En refactorización de seguridad

**Pasos completados:**
- ✅ Paso 1: Crear `.gitignore`, `.env.example`, `config.example.js`
- ⏳ Paso 2: Crear backend seguro

---

**⚠️ IMPORTANTE:** Este proyecto contiene información sensible. No compartas archivos `.env` o `config.js` con nadie.
