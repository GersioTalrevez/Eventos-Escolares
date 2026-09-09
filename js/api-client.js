/**
 * js/api-client.js
 * Cliente seguro para conectar el frontend con el Backend de Eventos Escolares (Express/Vercel)
 */

const API_BASE_URL = (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1')
  ? 'http://localhost:3001'
  : ''; // En producción / Vercel las peticiones van directamente a /api/...

const ApiClient = {
  // 1. Iniciar sesión de cliente con clientId y password
  async login(clientId, password) {
    try {
      const response = await fetch(`${API_BASE_URL}/api/auth/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ clientId, password })
      });

      const data = await response.json();

      if (!response.ok || !data.success) {
        throw new Error(data.error || 'Credenciales no válidas');
      }

      // Guardar token JWT y datos del cliente
      sessionStorage.setItem('token', data.token);
      sessionStorage.setItem('clientInfo', JSON.stringify(data.client));

      return { success: true, token: data.token, client: data.client };
    } catch (err) {
      console.error('Error en ApiClient.login:', err);
      return { success: false, error: err.message };
    }
  },

  // 2. Obtener fotos de Google Drive a través del backend seguro
  async getGallery() {
    const token = sessionStorage.getItem('token');
    if (!token) {
      return { success: false, error: 'Sesión no iniciada o token expirado' };
    }

    try {
      const response = await fetch(`${API_BASE_URL}/api/gallery`, {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });

      const data = await response.json();

      if (!response.ok || !data.success) {
        throw new Error(data.error || 'Error al obtener fotos desde el backend');
      }

      return { success: true, fotos: data.fotos, count: data.count };
    } catch (err) {
      console.error('Error en ApiClient.getGallery:', err);
      return { success: false, error: err.message };
    }
  },

  // 3. Crear pedido seguro
  async createOrder(items, total, deliveryMethod = 'whatsapp') {
    const token = sessionStorage.getItem('token');
    try {
      const response = await fetch(`${API_BASE_URL}/api/orders`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({ items, total, deliveryMethod })
      });

      const data = await response.json();
      return data;
    } catch (err) {
      return { success: false, error: err.message };
    }
  },

  // 4. Utilidades de sesión
  getToken() {
    return sessionStorage.getItem('token');
  },

  getClientInfo() {
    try {
      return JSON.parse(sessionStorage.getItem('clientInfo') || 'null');
    } catch (e) {
      return null;
    }
  },

  logout() {
    sessionStorage.removeItem('token');
    sessionStorage.removeItem('clientInfo');
  }
};

window.ApiClient = ApiClient;
