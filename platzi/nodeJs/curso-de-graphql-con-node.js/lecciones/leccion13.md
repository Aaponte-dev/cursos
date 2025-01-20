# Mutations and Inputs

Las `mutaciones` en `GraphQL` son operaciones que permiten modificar los datos en nuestro sistema. A diferencia de las `consultas`, que se utilizan para obtener información, las `mutaciones` se emplean para `crear`, `actualizar` o `eliminar` registros.

Para definir una `mutación` en nuestro `esquema`, utilizamos la palabra clave `mutation`. Dentro de este bloque, especificamos los diferentes tipos de `mutaciones` que nuestro `API` expone.

```GraphQL

type Mutation {
  createProduct(product: ProductInput): Product
  updateProduct(id: ID!, product: ProductInput): Product
  deleteProduct(id: ID!): Boolean
}
```

## Inputs: Definiendo Datos de Entrada

Los `inputs` en `GraphQL` se utilizan para definir la estructura de los datos que se envían en una `mutación`. Esto nos permite validar y estructurar los datos de entrada de una manera `clara` y `concisa`.

Para definir un `input`, utilizamos la palabra clave `input`. Los `inputs` pueden contener campos `escalares` (`String`, `Int`, `Float`, `Boolean`, `ID`) y otros inputs anidados.

```GraphQL

input ProductInput {
  name: String!
  description: String
  price: Float!
}
```

## Utilizando Mutaciones en el Playground

Al utilizar un entorno de desarrollo como `GraphQL Playground`, podemos probar nuestras mutaciones proporcionando los datos de entrada necesarios.

```GraphQL

mutation {
  createProduct(product: { name: "Nuevo Producto", price: 9.99 }) {
    id
    name
    price
  }
}
```

En este ejemplo, estamos ejecutando la `mutación` `createProduct` y proporcionando los valores para los campos `name` y `price` del `input` `ProductInput`.
