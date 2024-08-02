## Technical Test Lexart Documentation

**Developed by:** Sebastian Felipe Martinez Samaca

**Date:** 2024-08-02

**Project:** Technical Test Fullstack

**Keywords:** NodeJS, Express.js, React, Next.js, PostgreSQL, Vercel

**Deployment Infrastructure:** Vercel and Railway

#### Table of Contents

- [Introducción](#introducción)
- [backend](#backend)
- [frontend](#frontend)
  - [Porque Nestjs](#porque-nestjs)
  - [Porque Nextjs](#porque-nextjs)
- [Referencias](#referencias)

## Introducción

> [!IMPORTANT]
> Documentation link for the endpoints: [Endpoints](https://technical-test-lexart-development.up.railway.app/docs)


> [!IMPORTANT]
> Credentials to log in
> User: jhon.doe@example.com
> Password: **stringPassword123**

This project is a technical test for the company Fianzas. The project is divided into two parts: a backend and a frontend. The backend is developed with Express.js, and the frontend with Next.js. PostgreSQL is used as the database in Vercel. The deployment infrastructure is set up on Vercel and Railway.

> [!NOTE]
> The application was deployed using Vercel and Railway for the backend and frontend, respectively.

## backend

### How to run the backend

1. Open the terminal and navigate to the backend-node folder

```bash
cd backend-express
```

2. Install the dependencies with the following command

```bash
npm install
```

3. Run the following command to start the server

```bash
npm run build
npm run start
```

3. Open the browser and go to http://localhost:3000/docs to view the API documentation

## frontend

### How to run the frontend

Open the terminal and navigate to the frontend-react folder

1. Install the dependencies with the following command

```bash
cd frontend-next
```

2. Run the following command to start the server

```bash
npm install
```

3. Ejecutar el siguiente comando para iniciar el servidor

```bash
npm run dev
```

3. Open the browser and go to http://localhost:3000 to view the application


### Why Express.js

Express.js is a minimal and flexible web application framework for Node.js that allows you to build high-performance web applications and APIs. Its simplicity, modularity through middleware, and wide adoption with a large support community make it ideal for developing scalable solutions. Additionally, its user-friendly API and compatibility with various template engines and WebSockets facilitate the creation of dynamic and real-time applications.

### Porque Nextjs

Next.js is a React framework that enables the creation of web applications easily and quickly. Next.js allows for the creation of modular web applications, facilitating code reuse and scalability. Additionally, Next.js enables efficient web application development by utilizing server-side rendering.

## Reference

- [Express.js](https://expressjs.com/)
- [Next.js](https://nextjs.org/)
- [Vercel](https://vercel.com/)
- [Railway](https://railway.app/)