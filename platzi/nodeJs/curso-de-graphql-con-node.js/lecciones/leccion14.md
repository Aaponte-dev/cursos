# Variables y alias

`GraphQL` nos proporciona dos herramientas poderosas para `personalizar` y `optimizar` nuestras consultas: `variables` y `alias`.

## Variables

Las `variables` nos permiten `parametrizar` nuestras `consultas`. En lugar de escribir valores `estáticos` directamente en la `consulta`, podemos definir `variables` y luego asignarles valores en el momento de ejecutar la `consulta`. Esto hace que nuestras consultas sean más `flexibles` y `reutilizables`.

Por ejemplo, en lugar de escribir:

```GraphQL

query {
  product(id: 123) {
    name
    price
  }
}
```

Podemos utilizar una variable:

```GraphQL

query getProduct($productId: ID!) {
  product(id: $productId) {
    name
    price
  }
}
```

Y luego pasar el valor de `$productId` al ejecutar la consulta.

## Alias

Los `alias` nos permiten `asignar` nombres personalizados a los campos de nuestra respuesta. Esto es útil cuando queremos:

* `Renombrar` campos que tienen nombres demasiado largos o poco claros.

* `Obtener` el mismo campo varias veces con diferentes nombres.

* `Evitar` conflictos de nombres cuando se combinan resultados de múltiples fragmentos.

Por ejemplo:

```GraphQL

query {
  p1: product(id: 123) {
    productName: name
    productPrice: price
  }
}
```

En este caso, hemos asignado los alias `productName` y `productPrice` a los campos `name` y `price`, respectivamente junto con el resultado de la consulta de `product` a `p1`.
