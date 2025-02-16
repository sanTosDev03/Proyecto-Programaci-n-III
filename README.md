# Proyecto de Gestión de Productos y Dashboard

Este proyecto es una aplicación web para la gestión de productos que incluye funcionalidades CRUD (Crear, Leer, Actualizar, Eliminar) y un dashboard interactivo para visualizar datos de ventas y productos. El proyecto está desarrollado utilizando HTML, CSS, y JavaScript, con una estructura organizada y responsive.

## Características

- **Gestión de Productos**: Agregar, editar, eliminar y buscar productos.
- **Dashboard Interactivo**: Visualización de datos de ventas mensuales y productos más vendidos.
- **Diseño Responsive**: Adaptación a diferentes tamaños de pantalla.


## Archivos Principales

### `index.html`

Página principal de la aplicación donde se gestionan los productos. Incluye:
- Formulario para agregar y editar productos.
- Tabla para listar productos con opciones de edición y eliminación.
- Búsqueda de productos por nombre.

### `dashboard.html`

Dashboard interactivo para la visualización de datos de ventas y productos. Incluye:
- Gráficos de ganancias mensuales.
- Gráficos de productos más vendidos por cantidad y por ingresos.

### `css/styles.css`

Archivo de estilos CSS que define la apariencia de la aplicación, incluyendo reglas responsive para diferentes tamaños de pantalla.

### `js/api.js`

Archivo JavaScript que maneja las operaciones CRUD con la API. Incluye funciones para obtener, crear, actualizar y eliminar productos.

### `js/dashboard.js`

Archivo JavaScript que maneja la carga de datos desde `data.json` y renderiza los gráficos usando Chart.js.

### `js/logic.js`

Archivo JavaScript que maneja la lógica del modal, el formulario de productos y la búsqueda.

### `js/main.js`

Archivo JavaScript que maneja la carga y renderización de productos en la página principal.

### `js/ui.js`

Archivo JavaScript que maneja la lógica del menú desplegable.

### `data.json`

Archivo JSON con datos ficticios para generar los gráficos del dashboard. Incluye datos de ingresos totales, ganancias mensuales y productos vendidos.

## Requisitos

- Node.js para los gráficos.
- Navegador web moderno



