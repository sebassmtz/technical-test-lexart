## Technical Test Lexart Documentation

**Desarrollado:** Sebastian Felipe Martinez Samaca

**Fecha:** 2024-08-02

**Proyecto:** Technical test Fullstack

**Palabras Clave:** NodeJS, Express.js, React, Next.js, PostgreSQL, Vercel

**Infraestructura de despliegue:** Vercel y Railway

#### Tabla de contenido

- [Introducción](#introducción)
- [backend](#backend)
- [frontend](#frontend)
- [scrips DB](#scripts-db)
  - [PostgreSQL](#postgresql)
  - [SQL Server](#sql-server)
  - [Mockups frontend](#mockups-frontend)
  - [Porque Nestjs](#porque-nestjs)
  - [Porque Nextjs](#porque-nextjs)
- [Referencias](#referencias)

## Introducción

> [!IMPORTANT]
> Link de la documentacion de los endpoints: [Endpoints](https://technical-test-lexart-development.up.railway.app/docs)

> [!IMPORTANT]
> Link del despliegue en Vercel: [Frontend]()

> [!IMPORTANT]
> Credenciales para ingresar
> Usuario: jhon.doe@example.com
> Contraseña: **stringPassword123**

Este proyecto es una prueba técnica para la empresa Fianzas. El proyecto se divide en dos partes, una parte backend y una parte frontend. El backend se desarrolló con Express.js y el frontend con Next.js. La base de datos se utilizó PostgreSQL en Vercel. La infraestructura de despliegue se realizó en Vercel y Railway.

> [!NOTE]
> Para el despliegue de la aplicacion se utilizo Vercel y Railway, para el backend y frontend respectivamente.

## backend

### Como ejecutar el backend

1. Abrir la terminal y dirigirse a la carpeta backend-node

```bash
cd backend-node
```

2. Instalar las dependencias con el siguiente comando

```bash
npm install
```

3. Ejecutar el siguiente comando para iniciar el servidor

```bash
npm run start:dev
```

3. Abrir el navegador para ir `http://localhost:3000/docs` para ver la documentacion de los endpoints

## frontend

### Como ejecutar el frontend

1. Abrir la terminal y dirigirse a la carpeta frontend-react

```bash
cd frontend-react
```

2. Instalar las dependencias con el siguiente comando

```bash
npm install
```

3. Ejecutar el siguiente comando para iniciar el servidor

```bash
npm run dev
```

3. Abrir el navegador para ir `http://localhost:3000` para ver la aplicacion

### Mockups frontend

1. Pagina Principal

![Home](./assets/home.png)

2. Pagina de Dashboard

![Dash](./assets/dash.png)

![Logout](./assets/products.png)

3. Pagina de Productos

![Products](./assets/logout.png)

### Porque Express.js

Express.js es una estructura de aplicación web minimalista y flexible para Node.js que permite construir aplicaciones web y APIs de alto rendimiento. Su simplicidad, modularidad a través de middleware y amplia adopción con una gran comunidad de soporte lo hacen ideal para desarrollar soluciones escalables. Además, su API amigable y compatibilidad con varios motores de plantillas y WebSockets facilitan la creación de aplicaciones dinámicas y en tiempo real.

### Porque Nextjs

Nextjs es un framework de React que permite crear aplicaciones web de forma sencilla y rápida. Nextjs es un framework que permite crear aplicaciones web de forma modular, lo que facilita la reutilización de código y la escalabilidad de la aplicación. Además, Nextjs es un framework que permite crear aplicaciones web de forma eficiente, ya que utiliza el concepto de renderizado del lado del servidor.

## Referencias

- [Express.js](https://expressjs.com/)
- [Next.js](https://nextjs.org/)
- [Vercel](https://vercel.com/)
- [Railway](https://railway.app/)