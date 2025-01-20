# Sistema de tipado

`GraphQL` ofrece un conjunto de `tipos de datos` básicos, o `escalares`, que son los bloques constructores para definir los tipos más complejos:

* `Int`: Representa un número entero.

* `Float`: Representa un número de punto flotante.

* `String`: Representa una cadena de texto.

* `Boolean`: Representa un valor booleano (verdadero o falso).

* `ID`: Representa un identificador único, generalmente utilizado para identificar de manera interna los objetos.

## Tipos de Operaciones en GraphQL

A diferencia de las `API REST` que utilizan métodos `HTTP` como `GET`, `POST`, `PUT` y `DELETE` para indicar el tipo de operación, `GraphQL` utiliza dos conceptos principales:

* Queries: Se utilizan para obtener datos. Son equivalentes a las solicitudes `GET` en `REST`.

* `Mutations`: Se utilizan para modificar datos, como `crear`, `actualizar` o `eliminar` registros. Equivalen a las solicitudes `POST`, `PUT` y `DELETE` en `REST`.

## El código de estado y la autodocumentación

Un aspecto interesante de `GraphQL` es que siempre devuelve un código de estado `HTTP` 200, incluso si hay `errores` en la consulta. La información sobre el éxito o fracaso de la operación, así como cualquier mensaje de error, se incluye en el cuerpo de la respuesta.

Otra ventaja significativa de `GraphQL` es su capacidad de `autodocumentar` la `API`. Al utilizar herramientas como el `GraphQL Playground`, se genera automáticamente una documentación interactiva que describe el esquema, los tipos y las operaciones disponibles, facilitando enormemente el desarrollo y la comprensión de la `API`.
