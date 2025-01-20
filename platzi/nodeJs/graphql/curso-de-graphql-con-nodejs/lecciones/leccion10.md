# Archivos .graphql (mejor developer experience)

Separar la definición del esquema `GraphQL` en un archivo independiente (como `schema.graphql`) ofrece múltiples ventajas:

* `Mayor claridad`: Mantiene el esquema separado de la lógica de los resolvers, mejorando la legibilidad del código.

* `Reutilización`: Permite compartir el esquema entre diferentes partes de la aplicación o incluso entre diferentes proyectos.

* `Herramientas de desarrollo`: Facilita el uso de herramientas específicas para validar y analizar el esquema `GraphQL`.

## Instalando la dependencia

Para trabajar con archivos `.graphql`, necesitamos instalar la siguiente dependencia:

```Bash

npm install graphql-tools/load-files
```

Esta herramienta nos permite cargar el esquema definido en el archivo `schema.graphql` y utilizarlo en nuestra aplicación.

## Configurando nodemon

Para que los cambios en nuestro archivo `schema.graphql` se reflejen automáticamente en el servidor, debemos configurar `nodemon` para que observe este archivo y reinicie el servidor en caso de modificaciones.

Crea un archivo `nodemon.json` en la raíz de tu proyecto con la siguiente configuración:

```JSON

{
  "ignore": [
    ".git",
    "node_modules/**/node_modules"
  ],
  "watch": [
    "src/**/*.js",
    "src/**/*.graphql",
    "src/**/*.gpl" // Puedes agregar más extensiones si es necesario
  ],
  "ext": "js, json, graphql"
}
```

Esta configuración le indica a nodemon que:

* `Ignore`: Las carpetas `.git` y `node_modules`.

* `Observe`: Los archivos con extensiones `.js`, .`graphql` y `.gpl` dentro de la carpeta `src` y sus subcarpetas.

* `Reinicie`: El servidor cuando se detecte un cambio en alguno de estos archivos.

## Ejemplo de uso

Suponiendo que tienes un archivo `schema.graphql` con la siguiente definición:

```GraphQL

type Query {
  hello: String
}
```

Y un archivo `index.js` donde configuras tu servidor Apollo:

```JavaScript

const { ApolloServer } = require('apollo-server');
const { loadFilesSync } = require('@graphql-tools/load-files');

const typeDefs = loadFilesSync(__dirname, { extensions: ['graphql'] });

// ... resto de tu configuración
```

Al ejecutar `nodemon` desde la línea de comandos, cualquier cambio que realices en `schema.graphql` hará que el servidor se reinicie y refleje los cambios en tiempo real.

### Ventajas de esta configuración:

* `Desarrollo ágil`: Permite realizar cambios en el esquema rápidamente y ver los resultados de inmediato.

* `Mejor experiencia de desarrollo`: Simplifica el proceso de desarrollo y reduce la posibilidad de errores.

* `Mayor organización`: Mantiene el esquema separado del código de los resolvers.

## Consideraciones adicionales

* `Otras extensiones`: Puedes agregar más extensiones a la configuración de `nodemon` si utilizas otras extensiones de archivo para definir tu esquema.

* `Validación`: Es recomendable utilizar herramientas de `validación` de esquemas `GraphQL` para garantizar la integridad de tu esquema.

* `Escalabilidad`: Para proyectos más grandes, puedes considerar utilizar herramientas de gestión de versiones para controlar los cambios en el esquema.

Con esta configuración, tendrás un flujo de trabajo más eficiente y organizado para desarrollar tus `APIs GraphQL`.
