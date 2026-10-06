# Plataforma Web · Sergio Ricardo Molina · Fotografía Profesional
**Mendoza, Argentina**  
*Portafolio Artístico, Coberturas Escolares y Panel de Gestión Privada*

---

## 🌟 Visión del Proyecto y Filosofía de Diseño

Este ecosistema web fue desarrollado a medida para el fotógrafo profesional **Sergio Ricardo Molina**, fusionando un portafolio de autor sobrio y de alta gama con un sistema comercial y administrativo autónomo para coberturas escolares y sesiones particulares.

### Principios y Detalles Esenciales (Inviolables)
* **Estética "Atelier Darkroom":** Fondo negro profundo (`#111111` / `#131313`), acentos en azul fotográfico analógico (`#005580` / `#38bdf8`), tipografía editorial limpia (*Manrope* y *Raleway*), espaciados equilibrados y jerarquía clara.
* **Cero Imágenes Ficticias / Sin Placebos:** Cada galería consume exclusivamente fotografías reales del autor alojadas en **Google Drive**. No se admiten imágenes falsas ni maquetas estáticas que generen confusión visual.
* **Bloque Oficial de Canales Directos (3 Columnas):** Presente de manera idéntica y simétrica tanto en móviles como en computadoras:
  * 💬 **WhatsApp:** `+54 9 261 317-5222` (Borde verde `#4ade80`)
  * 📦 **Catálogo:** Enlace directo de productos (Borde amarillo `#facc15`)
  * 📷 **Instagram:** `@sergioricardo.molina` (Borde naranja `#fb923c`)
  * Pie de autor: `© Sergio Ricardo Molina · Fotografía Profesional · Mendoza, Argentina`
* **Protección Activa de Derechos de Autor:**
  * Bloqueo estricto de menú contextual (`contextmenu` / clic derecho).
  * Bloqueo de arrastre de imágenes (`dragstart`).
  * Muestras públicas con marcas de agua diagonales y tramas de protección anti-captura.
  * Visores de portafolio con firma de autor sutil en la esquina inferior izquierda: `Sergio Molina • [Carpeta] • #[Archivo]`.
* **Autonomía Operativa 100% Sin Código:** El fotógrafo administra sus lotes, crea álbumes públicos y privados con clave, actualiza tarifas y audita visitas desde su propio panel sin tener que editar código HTML ni ejecutar comandos de terminal.

---

## 🏗️ Arquitectura de Repositorios (Ecosistema Modular)

El proyecto se encuentra dividido en dos repositorios independientes en GitHub para garantizar máxima seguridad, escalabilidad y orden:

```text
                                       ┌──────────────────────────────────────────────┐
                                       │   https://sergiomolina-fotografia.netlify.app │
                                       │       (o GersioTalrevez/Eventos-Escolares)   │
                                       └──────────────────────┬───────────────────────┘
                                                              │
                     ┌────────────────────────────────────────┴────────────────────────────────────────┐
                     ▼                                                                                 ▼
        [ Portafolio Artístico Modular ]                                                 [ Portal Comercial y Privado ]
        ├── index.html (Home Portafolio)                                                 ├── eventos.html (Directorio Escolar Público)
        ├── sobre-mi.html                                                                ├── galeria.html (Muestras con Marca de Agua + Pedidos)
        ├── ensayos.html (Subcarpetas Drive)                                             ├── pedido.html (Remito y Resumen para WhatsApp)
        ├── postales.html (Subcarpetas Drive)                                            └── privadas.html (Descarga ZIP sin Marca de Agua)
        ├── miscelaneas.html (Subcarpetas Drive)
        └── sesiones.html (Subcarpetas Drive)
                     │
                     │  (Acceso oculto Ctrl+Alt+A / Consola Propietario)
                     ▼
        ┌─────────────────────────────────────────────────────────────┐
        │        REPOSITORIO PRIVADO: GersioTalrevez/panel            │
        │           https://gersiotalrevez.github.io/panel/           │
        └──────────────────────────────┬──────────────────────────────┘
                                       │
                     ┌─────────────────┴─────────────────┐
                     ▼                                   ▼
        [ index.html (Login Blindado) ]        [ panel.html (Gestor de Galerías) ]
        • Filtro estricto:                     • Listado 100% real de Supabase
          molinaoksergio@gmail.com             • Borrado operativo de carpetas
        • Google OAuth + Clave de respaldo     • Métricas de álbumes
                     │                                   │
                     ├───────────────────────────────────┼───────────────────────────────────┐
                     ▼                                   ▼                                   ▼
        [ cargas.html ]                         [ precios.html ]                    [ metricas.html ]
        • Vinculación carpetas Drive            • Tarifas: Impresa ($7.500)         • Estadísticas en tiempo real
        • Detección automática portada            y Digital ($2.500)                • Exclusión de visitas propias
        • Flag Pública / Privada con clave      • Sincronización con tabla          • Paginación de 20 registros
                                                  configuracion                     • Fecha y hora completas
```

---

## 📂 Mapa Detallado de Páginas y Módulos

### 1. Repositorio Principal (`Eventos-Escolares` / Portafolio)

| Archivo | Rol y Funcionamiento |
| :--- | :--- |
| **`index.html`** | **Portada y Menú Principal del Portafolio.** Cuadrícula sobria con 6 módulos: *Sobre mí*, *Ensayos*, *Postales*, *Misceláneas*, *Sesiones* y *Eventos*. Incluye el botón destacado de **Acceso Privado Clientes 🔒** con modal limpio (sin pistas de contraseñas), el bloque de redes sociales y el atajo discreto hacia la consola administrativa. |
| **`sobre-mi.html`** | Página biográfica con fotografía de autor, filosofía de trabajo y enlace directo a consulta por sesiones privadas. |
| **`ensayos.html`** | Galería documental de autor conectada a Google Drive (`1K4h3SPq2WdCEMMzrTSToD-quebXDD4rS`). Explora y titula automáticamente sus subcarpetas (*35mm Análogo*, *Blanco y Negro*, *Macro*, etc.), con visor táctil *swipe* y firma en esquina inferior izquierda. |
| **`postales.html`** | Galería de paisajes mendocinos y alta montaña conectada a Google Drive (`1W-eFu0G6mqggGw6TN7bSU9Dvz0k2h70M`). Agrupa subcarpetas (*Mendoza y Cordillera*, *Viñedos y Caminos del Vino*), visor táctil y firma de autor. |
| **`miscelaneas.html`** | Galería de texturas, fauna y raíces conectada a Google Drive (`1cRFXW5h8P_z6gd0Zz91tct77Or5CBBZM`). Cuadrícula de 4 columnas en desktop y 2 columnas en celulares. |
| **`sesiones.html`** | Galería de retratos de estudio, recitales y sesiones de 15 años conectada a Google Drive (`1IReNcUgPTRAa9nj3-u38QstyZWV9n6RY`). |
| **`eventos.html`** | **Directorio Escolar Oficial.** Consulta en tiempo real la tabla `galeria` de Supabase filtrando exclusivamente los álbumes públicos (`es_privada = false`). Tarjetas completas clickeables con portada real y acceso a la galería. Bloque de acceso privado con clave para padres con PIN escolar. |
| **`galeria.html`** | **Galería de Muestras Escolares para Familias.** Carga las fotos de Google Drive con marca de agua diagonal y trama anti-descarga. Tarjetas con selección dual interactiva: **Impresa 15x21 cm** (Botón amarillo permanente `#facc15`) y **Digital HD** (Botón cian `#005580`). Barra flotante fija con subtotal dinámico y botón para encargar por WhatsApp. |
| **`pedido.html`** | **Comprobante y Remito de Pedido.** Desglose sintético sin imágenes que lista los nombres exactos de los archivos de Drive elegidos, formato solicitado, subtotales y botón verde que abre WhatsApp con el pedido redactado renglón por renglón. |
| **`privadas.html`** | **Álbum Privado de Clientes.** Destinado a familias y clientes que ingresan con su clave. Visualización limpia en alta fidelidad **sin marca de agua**, con botones de descarga individual en máxima resolución y selector para **Descarga masiva en archivo ZIP**. Botón superior de retorno exclusivo hacia `index.html`. |

---

### 2. Repositorio Administrativo (`panel`)

| Archivo | Rol y Funcionamiento |
| :--- | :--- |
| **`index.html`** | **Login Guardián de Acceso.** Interfaz minimalista con badge de seguridad. Autenticación con Google OAuth validada estrictamente contra el correo `molinaoksergio@gmail.com` (rechazo inmediato y sin parpadeos a cualquier cuenta no autorizada) y campo de contraseña maestra de respaldo con visibilidad alternable. Redirección automática a `panel.html`. Botón superior de retorno hacia el Portafolio. |
| **`panel.html`** | **Consola de Control del Fotógrafo.** Muestra exclusivamente las galerías reales sincronizadas con Supabase en 3 columnas en desktop y 2 columnas compactas en celulares. Tarjetas con portadas reales, enlace de Drive, botón de borrado operativo y contadores de *Total*, *Públicas* y *Privadas*. |
| **`cargas.html`** | **Gestor de Enlaces y Nuevos Álbumes.** Permite pegar el enlace de cualquier carpeta de Google Drive. Detecta automáticamente el título de la carpeta y la primera foto como portada si no se ingresan a mano. Switch para designar si es *Pública* o *Privada con clave*. Guarda inmediatamente en Supabase con respaldo local. |
| **`precios.html`** | **Control Centralizado de Tarifas.** Configuración en vivo del precio de Copia Impresa 15x21 cm (por defecto `$7.500`) y Archivo Digital HD (por defecto `$2.500`). Sincronización universal mediante la fila `id = 1` de la tabla `configuracion` en Supabase. |
| **`metricas.html`** | **Auditoría y Analítica de Visitas en Vivo.** Registra visitas por página, aperturas de fotos en alta definición y clics hacia WhatsApp. Excluye automáticamente las visitas del propio fotógrafo. Paginación de a 20 registros por hoja (hasta 500 registros auditados) con fecha y hora completas. |

---

## 🗄️ Esquema de Base de Datos (Supabase / PostgreSQL)

**Proyecto Oficial:** `zbixojacwvanucxlrdcd.supabase.co`

```sql
-- 1. Tabla de Galerías (Públicas y Privadas)
CREATE TABLE IF NOT EXISTS public.galeria (
    id BIGINT GENERATED BY DEFAULT AS IDENTITY PRIMARY KEY,
    titulo TEXT NOT NULL,
    drive_url TEXT NOT NULL,
    portada_url TEXT,
    es_privada BOOLEAN DEFAULT false,
    password VARCHAR(100),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Vista de compatibilidad en plural
CREATE OR REPLACE VIEW public.galerias AS SELECT * FROM public.galeria;

-- 2. Tabla de Tarifas Comerciales Centralizadas
CREATE TABLE IF NOT EXISTS public.configuracion (
    id BIGINT PRIMARY KEY DEFAULT 1,
    clave TEXT DEFAULT 'tarifas_oficiales',
    tarifa_impresa NUMERIC DEFAULT 7500,
    tarifa_digital NUMERIC DEFAULT 2500,
    whatsapp TEXT DEFAULT '5492613175222',
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now())
);

-- 3. Tabla de Analítica y Registro de Visitas
CREATE TABLE IF NOT EXISTS public.visitas (
    id BIGINT GENERATED BY DEFAULT AS IDENTITY PRIMARY KEY,
    tipo VARCHAR(50) NOT NULL DEFAULT 'visita_pagina',
    pagina VARCHAR(100) NOT NULL DEFAULT 'index.html',
    album_id VARCHAR(100),
    album_titulo VARCHAR(255),
    detalle VARCHAR(255),
    dispositivo VARCHAR(50) DEFAULT 'desktop',
    origen VARCHAR(255) DEFAULT 'directo',
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);
```

---

## 📱 Sincronización y Pedidos por WhatsApp

Cuando una familia selecciona sus fotografías en `galeria.html` y confirma en `pedido.html`, se genera un mensaje codificado listo para enviar al número del fotógrafo con la siguiente estructura formal:

```text
Hola Sergio Ricardo Molina, quiero encargarte estas fotos:
Evento: [Nombre Oficial de la Galería]
Tipo de Pedido: Copia Impresa 15x21 cm ($7.500 c/u) y Archivo Digital HD ($2.500 c/u)
Cantidad de fotos: 3
Fotos seleccionadas: DSC_4821.jpg (Impresa), DSC_4822.jpg (Digital), DSC_4823.jpg (Ambas)
Total estimado: $12.500
Titular: [Nombre del Padre/Madre]
Institución / Alumno: [Colegio / Curso]
¿Me confirmas los datos de pago y plazos de entrega? Muchas gracias.
```

---

## 🛠️ Tecnologías y Librerías Utilizadas
* **Frontend:** HTML5 semántico, CSS3 moderno, Vanilla JavaScript (ES6+).
* **Framework CSS:** Tailwind CSS (utilidades y componentes responsive).
* **Iconografía & Tipografía:** Google Fonts (*Manrope*, *Raleway*) y *Material Symbols Outlined*.
* **Almacenamiento Multimedia:** Google Drive API v3 (recorrido de carpetas y paginación masiva).
* **Base de Datos & Auth:** Supabase Client v2 (`@supabase/supabase-js`).
* **Descargas Comprimidas:** `JSZip` + `FileSaver.js` en galerías privadas.
* **Alojamiento:** GitHub Pages + Netlify (producción CDN global con SSL gratuito).

---

© 2026 **Sergio Ricardo Molina** · Fotografía Profesional · Mendoza, Argentina. Todos los derechos reservados.
