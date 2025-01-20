# Login

Para implementar un sistema de `autenticación` robusto en una aplicación `GraphQL`, podemos aprovechar las funcionalidades de `Passport.js`. Esta biblioteca proporciona una forma flexible y extensible de autenticar usuarios utilizando diversas estrategias, como `autenticación local`, `OAuth`, etc.

## Pasos para integrar `Passport.js` con GraphQL

1. `Instalación de dependencias`: Comenzamos instalando las dependencias necesarias:

```Bash

    npm install graphql-passport
```

`graphql-passport` es un paquete que facilita la integración de `Passport.js` con `GraphQL`.

2. `Creación de la estrategia de autenticación`: Definimos la estrategia de autenticación que utilizaremos. Para autenticación `local` (basada en nombre de `usuario` y `contraseña`), podemos utilizar `GraphQLLocalStrategy`. Esta estrategia verifica las `credenciales` proporcionadas por el `usuario` contra una `base de datos` o cualquier otro `almacén de usuarios`.

3. `Registro de la estrategia en Passport`: Una vez creada la `estrategia`, la registramos en `Passport` para que pueda ser utilizada.

4. `Creación del contexto de GraphQL`: El contexto de `GraphQL` es un objeto que se pasa a cada `resolver` y que contiene información relevante para la resolución de la consulta, como el usuario autenticado. Utilizaremos `graphql-passport` para crear un contexto que incluya la información de autenticación proporcionada por `Passport`.

5. `Integración con Apollo Server`: Al crear el servidor `Apollo`, proporcionamos el `contexto` creado en el paso anterior. Esto permitirá que los resolvers tengan acceso a la información de autenticación del usuario.

Ejemplo de código:

```JavaScript

const passport = require('passport');
const { GraphQLLocalStrategy, buildContext } = require('graphql-passport');

// ... (resto del código)

passport.use(new GraphQLLocalStrategy(
  (email, password, done) => {
    // Lógica para verificar las credenciales contra la base de datos
  }
));

const context = buildContext(passport);

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context
});
```

Explicación detallada:

* `graphql-passport` proporciona herramientas para integrar `Passport.js` en tu aplicación GraphQL.

* `GraphQLLocalStrategy` es una estrategia de autenticación específica para autenticación local basada en nombre de usuario y contraseña.

* El contexto de `GraphQL` es enriquecido con la información de autenticación proporcionada por `Passport.js`.

* `Apollo Server` utiliza este contexto para resolver las consultas y tener acceso a la información del usuario autenticado.

## Beneficios de esta integración

* `Autenticación segura`: `Passport.js` ofrece una amplia gama de estrategias de autenticación y mecanismos de protección contra ataques comunes.

* `Facilidad de uso`: `graphql-passport` simplifica la integración de `Passport.js` con `GraphQL`.

* `Flexibilidad`: Puedes personalizar la estrategia de autenticación según tus necesidades.

## Consideraciones adicionales

* `Autorización`: Una vez que un usuario está autenticado, es necesario implementar un sistema de autorización para controlar qué acciones puede realizar.

* `Tokens`: Puedes utilizar `tokens JWT` para representar el estado de autenticación del usuario y evitar tener que volver a autenticarlo en cada solicitud.

* `Seguridad`: Siempre es importante seguir las mejores prácticas de seguridad al implementar la autenticación.
