# Análisis de la API REST (sin GraphQL)

Este proyecto está organizado en varias carpetas para separar las diferentes responsabilidades de la aplicación. A continuación, se detalla la función de cada una:

## Estructura de Carpetas

* `src`:
    Contiene el código fuente principal de la aplicación.

* `config`:
    Almacena la configuración de la aplicación, como las variables de entorno leídas del archivo .env.

* `db`:
    Gestiona la interacción con la base de datos.

  * `migrations`: Scripts para realizar cambios en la estructura de la base de datos.

  * `models`: Definición de los modelos que representan las tablas de la base de datos (e.g., User, Product, Category).

  * `seeders`: Datos iniciales para poblar las tablas (e.g., usuarios de muestra, productos).

  * `sequelize`: Configuración de Sequelize para conectarse a la base de datos.

  * `config`: Configuración adicional para la conexión a la base de datos (e.g., para scripts de línea de comandos).

* `dtos`:
    Objetos de transferencia de datos para validar las entradas de los servicios.

* `middlewares`: Lógica de middleware para realizar tareas como autenticación.

* `routes`:
    Definición de las rutas de la API.

* `services`:
    Lógica de negocio para interactuar con los modelos de datos.

* `utils`:
    Contiene utilidades generales.

  * `auth`: Lógica de autenticación utilizando Passport.js.

* `app.js`:
    Punto de entrada de la aplicación, donde se configura el servidor y se cargan las rutas.

* `index.js`:
    Crea la instancia de la aplicación y la inicia.
