
# 🧠 Task Manager App

Aplicación web de gestión de tareas desarrollada como parte de la prueba técnica para la vacante *FullStack Developer* en **Inlaze**.

Este proyecto simula un entorno colaborativo donde los usuarios pueden autenticarse, gestionar proyectos, tareas, y comentarios, con un enfoque en usabilidad, escalabilidad y buenas prácticas de desarrollo moderno.

---

## 🚀 Tecnologías utilizadas

### Frontend:
- [React](https://reactjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Headless UI](https://headlessui.com/) (opcional para accesibilidad y modales)
- HTML5 + CSS3
- Simulación de datos vía archivos `mock`

### Backend (no conectado aún):
- [NestJS](https://nestjs.com/) con JWT y arquitectura modular (avance previo)

---

## 📦 Estructura del proyecto

```
src/
├── components/
│   ├── AuthLoginForm.js
│   ├── LayoutHeader.js
│   ├── ProjectCard.js
│   ├── ProjectDetail.js
│   ├── TaskItem.js
│   ├── TaskFilterSort.js
│   ├── CommentSection.js
├── mock/
│   └── projects.js
├── App.js
├── index.js
├── styles.css
public/
└── index.html
```

---

## 🔐 Credenciales de prueba

```
Usuario: user  
Contraseña: password
```

Actualmente el sistema de login es simulado. Se almacena un token de prueba en `localStorage` para simular una sesión activa.

---

## ✅ Funcionalidades implementadas

- 🔐 Simulación de login
- 📁 Visualización de proyectos activos
- 🧩 Tareas por proyecto con estado y fecha
- 📌 Filtros y orden por estado o prioridad
- 💬 Sección de comentarios por tarea
- 🎨 Estilo responsive con Tailwind
- 🚧 Código modular y mantenible

---

## ⚙️ Cómo ejecutar

```bash
npm install
npm start
```

> Requiere Node.js versión 16 o superior

---

## 🗒️ Consideraciones

- El proyecto usa mocks para simular los endpoints.  
- El backend NestJS está desarrollado por separado con autenticación y roles vía JWT.  
- La estructura está lista para integrar la API real cuando se requiera.

---

## 🧑‍💻 Autora

**Lina Rizo**  
[GitHub](https://github.com/estefaniarizzo)  
Correo: [tefa49395@gmail.com]  
LinkedIn: [https://www.linkedin.com/in/lina-estefania-rizo-forero/]
