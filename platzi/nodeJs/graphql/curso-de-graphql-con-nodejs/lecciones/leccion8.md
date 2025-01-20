# Listas y non-null types

## Tipos No Nulos (Non-Null Types)

En `GraphQL`, es posible garantizar que un campo siempre tenga un `valor` y `nunca sea nulo`. Para ello, se utiliza el signo de exclamación (`!`) después del tipo de dato. Esto asegura que el servidor siempre devolverá un valor para ese campo específico, evitando errores inesperados en el cliente.

Ejemplo:

```GraphQL

type User {
  id: ID!
  name: String!
  email: String!
}
```

En este ejemplo, los campos `id`, `name` y `email` son `obligatorios` y siempre deben `tener un valor`. Si un usuario no tiene un `correo electrónico`, por ejemplo, se debería encontrar una manera de manejar esa situación en el `resolver`, en lugar de devolver un valor nulo.

## Listas en GraphQL

Para representar colecciones de valores en `GraphQL`, utilizamos corchetes `[]`. Esto nos permite definir campos que pueden contener `múltiples valores` del mismo tipo.

Ejemplo:

```GraphQL

type Post {
  id: ID!
  title: String!
  comments: [String!]
}
```

En este ejemplo, el campo `comments` es una `lista de cadenas de texto` (comentarios). Esto significa que un `post` puede tener cero, uno o muchos comentarios. El signo de exclamación dentro de los corchetes indica que cada elemento de la lista no puede ser `nulo`, es decir, cada comentario debe ser una cadena de texto `válida`.

## Combinando Listas y Tipos No Nulos

Podemos combinar `listas` y `tipos no nulos` para crear estructuras de datos más complejas.
Por ejemplo:

```GraphQL

type User {
  id: ID!
  name: String!
  posts: [Post!]
}
```

En este caso, cada usuario tiene una lista de `posts`, y cada `post` en esa lista es un objeto `Post` completo (`no nulo`).
