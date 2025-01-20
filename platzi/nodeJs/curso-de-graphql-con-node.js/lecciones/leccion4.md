# Tu primera API GraphQL

## ¿Qué es Apollo Server?

`Apollo Server` es una biblioteca de `Node.js` que facilita la creación de servidores `GraphQL`. Proporciona herramientas para definir `esquemas`, `resolver consultas` y `mutaciones`, y `gestionar` el ciclo de vida de la `API`.
Configuración del Proyecto

## Instalación de dependencias

```Bash
    npm install graphql @apollo/server
```

## Creación del archivo index.js

```JavaScript
const { ApolloServer } = require('apollo-server-express');
const { ApolloServerPluginLandingPageGraphQLPlayground } = require('apollo-server-core');

// Definimos el esquema GraphQL
const typeDefs = gql`
  type Query {
    hello: String
  }
`;

// Definimos los resolvers (funciones que resuelven las consultas)
const resolvers = {
  Query: {
    hello: () => '¡Hola, mundo!'
  }
};

// Creamos el servidor Apollo
const server = new ApolloServer({
  typeDefs,
  resolvers,
  plugins: [ApolloServerPluginLandingPageGraphQLPlayground] // Activa el playground de GraphQL
});

// Exportamos una función para integrar el servidor con una aplicación Express
module.exports = async (app) => {
  await server.start();
  server.applyMiddleware({ app });
};
```

Explicación detallada:

* `typeDefs`: Define la estructura de los datos que nuestra API expone. En este ejemplo, solo tenemos una consulta hello que devuelve un saludo.

* `resolvers`: Contiene las funciones que se encargan de resolver las consultas. Cada función se asocia a un campo del esquema.

* `ApolloServer`: Crea una instancia del servidor GraphQL, configurando el esquema, los resolvers y activando el playground (una interfaz gráfica para explorar la API).

* `applyMiddleware`: Integra el servidor GraphQL con una aplicación Express existente (suponiendo que tienes una aplicación Express).

## ¿Qué hace cada parte?

* Esquema (`typeDefs`): Define los tipos de datos y las operaciones que se pueden realizar en la API.
* `Resolvers`: Implementan la lógica para resolver las consultas y mutaciones.
* `Apollo Server`: Se encarga de gestionar las conexiones, ejecutar los resolvers y devolver los resultados al cliente.
* `Playground`: Proporciona una interfaz gráfica interactiva para explorar la API y probar consultas.

## Integración con tu aplicación

Para integrar este servidor GraphQL con tu aplicación Express, puedes importar la función `useGraphql` y ejecutarla:

```JavaScript

const express = require('express');
const useGraphql = require('./graphql'); // Suponiendo que el archivo anterior se llama graphql.js

const app = express();

// ... otras configuraciones de tu aplicación

useGraphql(app);

app.listen(4000, () => {
  console.log('Servidor iniciado en el puerto 4000');
});
```
