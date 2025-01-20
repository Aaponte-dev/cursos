# Product resolvers

Para una mejor organización y mantenibilidad de nuestro código `GraphQL`, es recomendable separar los `resolvers` por entidades. En este caso, crearemos un archivo `product.resolvers.js` para gestionar las operaciones relacionadas con los productos.

## ¿Por qué separar los resolvers?

* `Modularidad`: Cada archivo de `resolvers` se enfoca en una `entidad` específica, lo que facilita la comprensión y el mantenimiento del código.

* `Reutilización`: Los `resolvers` de un archivo pueden ser reutilizados en otros lugares de la aplicación.

* `Escalabilidad`: A medida que nuestra aplicación crece, podemos agregar nuevos archivos de `resolvers` sin afectar el resto del código.

## Estructura de un archivo de resolvers

Un archivo de `resolvers` típicamente exporta un objeto que define las funciones que resuelven las consultas y mutaciones para una `entidad` determinada. Por ejemplo, en `product.resolvers.js` podríamos tener:

```JavaScript

const products = [
  { id: 1, name: 'Laptop', price: 999 },
  // ... otros productos
];

const resolvers = {
  Query: {
    products: () => products,
    product: (_, { id }) => products.find(product => product.id === id)
  },
  Mutation: {
    createProduct: (_, { product }) => {
      // Lógica para crear un nuevo producto
    }
  }
};

module.exports = resolvers;
```

## Combinando los resolvers

Para utilizar estos resolvers separados, en nuestro archivo principal de configuración de `Apollo Server`, simplemente importamos cada archivo de `resolvers` y los combinamos:

```JavaScript

const { mergeResolvers } = require('@graphql-tools/merge');
const productResolvers = require('./product.resolvers');
// ... otros resolvers

const resolvers = mergeResolvers([
  productResolvers,
  // ... otros resolvers
]);
```

## Beneficios de esta estructura

* `Mayor claridad`: Cada archivo se enfoca en una única `entidad`, lo que facilita la `lectura` y el `mantenimiento` del código.

* `Mejor colaboración`: Diferentes desarrolladores pueden trabajar en diferentes archivos de `resolvers` de forma independiente.

* `Pruebas más fáciles`: Es más sencillo escribir pruebas unitarias para cada archivo de resolvers.

Consideraciones adicionales:

* `Organización de archivos`: Puedes crear una carpeta resolvers para almacenar todos los archivos de resolvers.

* `Complejidad`: Para proyectos más grandes, puedes considerar utilizar una herramienta de generación de `esquemas` para automatizar la creación de archivos de `resolvers`.

* `Acceso a datos`: Los `resolvers` suelen interactuar con una `base de datos` o con otras fuentes de datos para obtener la información necesaria.
