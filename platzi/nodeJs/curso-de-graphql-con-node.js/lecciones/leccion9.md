# Object types and fields

En `GraphQL`, los tipos de objeto representan las entidades de nuestro `dominio`. Para definir un nuevo tipo de objeto, utilizamos la palabra clave `type` seguida del `nombre` del `objeto` y, a continuación, `enumeramos` sus campos dentro de llaves.

```GraphQL

type Product {
  id: ID!
  name: String
  description: String
  price: Float
}
```

En este ejemplo, hemos definido un tipo de objeto llamado `Product` con los campos `id`, `name`, `description` y `price`. El signo de exclamación (`!`) después de `ID` indica que este campo es obligatorio y no puede ser nulo.

## Consultando Campos de Objetos

Cuando realizamos una consulta `GraphQL`, especificamos los campos exactos que deseamos obtener de un objeto. Esto permite a los clientes solicitar solo los datos necesarios, evitando la sobrecarga de datos.

Por ejemplo, para obtener el `nombre` y el `precio` de un `producto`, realizaríamos la siguiente consulta:

```GraphQL

query {
  product(id: 1) {
    name
    price
  }
}
```

En esta consulta, estamos solicitando el objeto `product` con el `ID` 1 y especificando que solo queremos los campos `name` y `price`.
