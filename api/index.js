/**
 * BACKEND SEGURO - Eventos Escolares
 * Servidor Express para Vercel
 * 
 * Rutas:
 * - POST /api/auth/login - Autenticación de clientes
 * - GET /api/gallery/:clientId - Obtener fotos de Google Drive
 * - POST /api/orders - Procesar pedidos
 */

const express = require('express');
const cors = require('cors');
require('dotenv').config();
const jwt = require('jsonwebtoken');
const axios = require('axios');

const app = express();

// Middleware
app.use(cors({
  origin: process.env.FRONTEND_URL || '*',
  credentials: true
}));
app.use(express.json());

// ============================================
// CONFIGURACIÓN SEGURA
// ============================================

const GOOGLE_API_KEY = process.env.GOOGLE_API_KEY;
const JWT_SECRET = process.env.JWT_SECRET || 'tu-clave-secreta-segura-cambiar-en-produccion';

// Base de datos temporal (en producción usar MongoDB/PostgreSQL)
const CLIENTS_DB = {
  'miprueba': {
    folderId: '1jmfMxkvwbSTiVXjnxo-wovYch4QCxAlx',
    password: 'miprueba123', // Hash en producción
    name: 'Test Client'
  },
  'familia2026': {
    folderId: process.env.FOLDER_FAMILIA_2026 || 'ID_CARPETA_FAMILIA_PEREZ',
    password: process.env.PASSWORD_FAMILIA_2026 || 'default123',
    name: 'Familia Perez'
  },
  'boda1234': {
    folderId: process.env.FOLDER_BODA_1234 || 'ID_CARPETA_BODA_JUAN_Y_MARIA',
    password: process.env.PASSWORD_BODA_1234 || 'default123',
    name: 'Boda Juan y María'
  }
};

// ============================================
// RUTAS PÚBLICAS
// ============================================

/**
 * POST /api/auth/login
 * Autentica un cliente y retorna JWT token
 */
app.post('/api/auth/login', (req, res) => {
  try {
    const { clientId, password } = req.body;

    if (!clientId || !password) {
      return res.status(400).json({ error: 'clientId y password requeridos' });
    }

    const client = CLIENTS_DB[clientId];

    if (!client) {
      return res.status(401).json({ error: 'Cliente no encontrado' });
    }

    // En producción: usar bcrypt.compare()
    if (client.password !== password) {
      return res.status(401).json({ error: 'Contraseña incorrecta' });
    }

    // Generar JWT token válido por 24 horas
    const token = jwt.sign(
      { clientId, name: client.name },
      JWT_SECRET,
      { expiresIn: '24h' }
    );

    res.json({
      success: true,
      token,
      client: { id: clientId, name: client.name }
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// ============================================
// MIDDLEWARE DE AUTENTICACIÓN
// ============================================

const authenticateToken = (req, res, next) => {
  const token = req.headers['authorization']?.split(' ')[1];

  if (!token) {
    return res.status(401).json({ error: 'Token requerido' });
  }

  jwt.verify(token, JWT_SECRET, (err, user) => {
    if (err) {
      return res.status(403).json({ error: 'Token inválido o expirado' });
    }
    req.user = user;
    next();
  });
};

// ============================================
// RUTAS PROTEGIDAS
// ============================================

/**
 * GET /api/gallery
 * Obtiene las fotos de Google Drive del cliente autenticado
 * (API Key almacenada en el backend - seguro)
 */
app.get('/api/gallery', authenticateToken, async (req, res) => {
  try {
    const client = CLIENTS_DB[req.user.clientId];

    if (!client) {
      return res.status(404).json({ error: 'Cliente no encontrado' });
    }

    // Consultar Google Drive API desde el backend (seguro)
    const folderId = client.folderId;
    const url = `https://www.googleapis.com/drive/v3/files?q='${folderId}'+in+parents+and+mimeType+contains+'image/'&orderBy=name&key=${GOOGLE_API_KEY}&fields=files(id,name)`;

    const response = await axios.get(url);

    if (response.data.error) {
      return res.status(400).json({ error: 'Error al acceder a Google Drive' });
    }

    // Transformar IDs de archivos en URLs de Google Drive
    const fotos = response.data.files?.map(file => ({
      id: file.id,
      name: file.name,
      thumbnail: `https://lh3.googleusercontent.com/d/${file.id}=w400`,
      highRes: `https://lh3.googleusercontent.com/d/${file.id}=w1600`
    })) || [];

    res.json({ success: true, fotos, count: fotos.length });
  } catch (error) {
    console.error('Error fetching gallery:', error);
    res.status(500).json({ error: error.message });
  }
});

/**
 * POST /api/orders
 * Crear un pedido (carrito de compras)
 */
app.post('/api/orders', authenticateToken, (req, res) => {
  try {
    const { items, total, deliveryMethod } = req.body;

    // Validar datos
    if (!items || !Array.isArray(items) || items.length === 0) {
      return res.status(400).json({ error: 'Items requeridos' });
    }

    // Crear orden
    const orderId = `ORD-${Date.now()}`;
    const order = {
      id: orderId,
      clientId: req.user.clientId,
      items,
      total,
      deliveryMethod,
      createdAt: new Date(),
      status: 'pending'
    };

    // En producción: guardar en BD
    console.log('Nueva orden:', order);

    res.json({
      success: true,
      orderId,
      message: 'Orden creada exitosamente'
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// ============================================
// RUTAS DE UTILIDAD
// ============================================

app.get('/api/health', (req, res) => {
  res.json({ status: 'Backend OK' });
});

// ============================================
// MANEJO DE ERRORES
// ============================================

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Error interno del servidor' });
});

// ============================================
// INICIAR SERVIDOR
// ============================================

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`✅ Backend ejecutándose en puerto ${PORT}`);
  console.log(`🔐 Modo: ${process.env.NODE_ENV || 'development'}`);
});

// Para Vercel
module.exports = app;
