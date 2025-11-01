# Frontend Upch

Aplicación web desarrollada con **React** y **Vite**, enfocada en la gestión de carros. Permite listar, crear, editar y eliminar registros mediante una interfaz intuitiva con tablas, filtros y modales.

---

## Tecnologías

- **React 18**  
- **Vite** (bundler y servidor de desarrollo rápido)  
- **Bootstrap 5** (UI y estilos)  
- **Context API** (para manejo de estado global y temas)  
- **API REST simulada** (para gestión de datos)  

---

## Estructura del Proyecto
src/
│
├── api/
│   ├── httpClient.js
│   ├── carService.js
│   └── userService.js
│
├── components/
│   ├── common/
│   │   ├── Modal.jsx
│   │   └── Button.jsx
│   │
│   ├── cars/
│   │   ├── CarModal.jsx
│   │   ├── CarTable.jsx
│   │   └── CarFilterBar.jsx
│   │
│   └── users/
│       ├── UserModal.jsx
│       ├── UserTable.jsx
│       └── UserFilterBar.jsx
│
├── hooks/
│   ├── useCars.js
│   └── useUsers.js
│
├── pages/
│   ├── CarsPage.jsx
│   ├── UsersPage.jsx
│   └── Dashboard.jsx
│
├── styles/
│   ├── variables.css
│   └── global.css
│
├── context/
│   ├── AppContext.jsx
│   └── ThemeContext.jsx
│
├── utils/
│   ├── validators.js
│   └── formatters.js
│
├── App.jsx
└── main.jsx

---

## Componentes Clave

- **Button**: Botón genérico reutilizable con estilos personalizados.  
- **Table**: Tabla dinámica, soporta renderizado personalizado de filas.  
- **UserTable**: Lista de carros con selección, edición y eliminación.  
- **CarModal**: Modal para crear o editar carros.  
- **DeleteModal**: Modal para confirmar eliminación de un registro.  
- **FilterBar**: Barra de filtros para búsqueda dinámica de registros.

---

## Manejo de APIs

Las operaciones sobre los carros se realizan mediante funciones en `src/api/users.js`:

- `getCars()` → Obtiene la lista de carros.  
- `createCar(car)` → Crea un nuevo carro.  
- `updateCar(id, car)` → Actualiza un carro existente.  
- `deleteCar(id)` → Elimina un carro por su ID.  

Estas funciones se consumen en las páginas y componentes, separando la lógica de UI de la de datos.

---

## Contexto

Se utiliza **Context API** para manejar:

- **ThemeContext**: Alterna entre temas `light` y `dark`.  
- **AppContext** (opcional): Maneja estados globales compartidos entre componentes.

---

## Comandos

Instala dependencias:

```bash
npm install
npm run dev
npm run build
