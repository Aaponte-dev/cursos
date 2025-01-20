# Custom Scalars

En `GraphQL`, los escalares son los tipos de datos más básicos, como `String`, `Int`, `Float` y `Boolean`. Sin embargo, a menudo necesitamos representar datos más complejos o específicos que no se ajustan a estos tipos estándar. Es aquí donde entran en juego los `escalares personalizados`. Estos nos permiten definir nuestros propios tipos de datos y validar su formato.

## ¿Cómo crear escalares personalizados con graphql-scalar?

1. `Instalación`: Primero, instalamos la librería graphql-scalar:

```Bash

npm install graphql-scalar
```

2. `Extensión de los tipos escalares`: Utilizamos la librería `graphql-scalar` para crear nuevas clases que extienden los tipos escalares existentes. Estas nuevas clases definirán las reglas de `validación` y serialización para nuestros tipos `personalizados`.

3. `Integración con Apollo Server`: Agregamos los escalares personalizados a nuestro esquema `GraphQL` y los integramos con nuestro `servidor Apollo`.

Ejemplo:

```JavaScript

const { GraphQLScalarType } = require('graphql');
const { Kind } = require('graphql/language');

const CategoryNameType = new GraphQLScalarType({
  name: 'CategoryName',
  description: 'A custom scalar for category names',
  serialize(value) {
    // Serialización: Convertir el valor interno a un valor de GraphQL
    return value;
  },
  parseValue(value) {
    // Validación al parsear un valor
    if (typeof value !== 'string') {
      throw new Error('Category name must be a string');
    }
    if (!/^[a-zA-Z0-9]{3,8}$/.test(value)) {
      throw new Error('Category name must be alphanumeric and between 3 and 8 characters');
    }
    return value;
  },
  parseLiteral(ast) {
    if (ast.kind !== Kind.STRING) {
      throw new Error('Category name must be a string');
    }
    return ast.value;
  },
});
```

Explicación del código:

* GraphQLScalarType: Clase base para crear nuevos tipos escalares.

* name: Nombre del tipo escalar personalizado.

* description: Descripción del tipo.

* serialize: Convierte el valor interno a un valor de `GraphQL`.

* parseValue: Valida el valor cuando se recibe desde el cliente.

* parseLiteral: Valida el valor cuando se recibe desde un literal en el esquema.

## Integración con el esquema GraphQL

```GraphQL

type Category {
  id: ID!
  name: CategoryName!
  products: [Product]
}
```

## Beneficios de los escalares personalizados

* `Validación`: Aseguran la integridad de los datos.

* `Reutilización`: Pueden ser utilizados en múltiples tipos y resolvers.

* `Extensibilidad`: Permiten crear tipos de datos más complejos y específicos.

## Consideraciones adicionales

* `Complejidad`: Para tipos de datos muy complejos, puede ser útil crear tipos de objetos personalizados en lugar de escalares.

* `Rendimiento`: La validación de escalares personalizados puede afectar el rendimiento, especialmente si se realizan muchas validaciones.
