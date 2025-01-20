# Proyecto: tienda online con GraphQL

En esta lección, comenzaremos a construir las bases de nuestra tienda en línea utilizando `GraphQL`.

## Descarga del Código Base

Clona el repositorio desde GitHub:

```shell
    git clone https://github.com/platzi/curso-nodejs-graphql/
```

## Configuración del Entorno

Crea un nuevo archivo llamado `.env` a partir de `.env.example`.

Completa el archivo `.env` con los datos de tu base de datos `PostgreSQL` (usuario, contraseña, etc.), los cuales encontrarás en el archivo `docker-compose.yml`. Esto permitirá que tu aplicación se conecte a la base de datos.

Ejecuta el comando `docker-compose up -d postgres` para iniciar el contenedor de la base de datos PostgreSQL. Esto creará una instancia de la base de datos en un entorno aislado.

## Creación de la Base de Datos y Población de Datos

Ejecuta el comando `npm run migrations:run` para crear las tablas y relaciones en la base de datos según lo definido en las migraciones. Esto asegurará que la estructura de la base de datos coincida con el modelo de datos de la aplicación.

Ejecuta el comando `npm run seed:all` para poblar la base de datos con datos iniciales. Esto te proporcionará datos de ejemplo para probar tu aplicación.

## Configuración de Insomnia

Importa el archivo `insomnia.json` a Insomnia. Este archivo contiene una colección de peticiones preconfiguradas que te permitirán interactuar con la API de forma rápida y sencilla.

Para realizar ciertas operaciones, como crear o modificar categorías, necesitarás un `token` de autenticación `JWT`. Utiliza las peticiones de inicio de sesión en `Insomnia` para obtener un token válido y luego agrégalo a las cabeceras de las demás peticiones que lo requieran como `Authorization`.
