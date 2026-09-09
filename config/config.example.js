/**
 * Configuration file template
 * 
 * IMPORTANT: Create a config.js file based on this template
 * NEVER commit config.js to git - it contains sensitive data
 * 
 * Instructions:
 * 1. Copy this file to config/config.js
 * 2. Fill in your actual API keys and secrets
 * 3. config.js is listed in .gitignore and won't be tracked
 */

// This would be loaded from environment variables in a real backend
// For now, this shows the structure needed

const CONFIG = {
  // Google Drive API Configuration
  google: {
    apiKey: 'YOUR_GOOGLE_API_KEY_HERE', // ⚠️ MUST be kept secret
    apiBaseUrl: 'https://www.googleapis.com/drive/v3',
  },

  // Photographer authentication
  photographer: {
    authorizedEmail: 'molinaoksergio@gmail.com',
    name: 'Sergio Molina',
  },

  // Client access passwords (temporary - should move to database)
  // ⚠️ These should NOT be stored in client-side code
  clients: {
    'familia2026': 'ID_CARPETA_FAMILIA_PEREZ',
    'boda1234': 'ID_CARPETA_BODA_JUAN_Y_MARIA',
    'miprueba': '1XYJaNvgWAVzO7w-XI8N7OkJXeBoE9uZB',
  },

  // Application settings
  app: {
    environment: 'production', // or 'development'
    debugMode: false,
  },
};

// Note: In a real implementation with Node.js backend:
// - Load from process.env or environment variables
// - Use a secrets management system (AWS Secrets Manager, HashiCorp Vault)
// - Never expose API keys to the frontend
