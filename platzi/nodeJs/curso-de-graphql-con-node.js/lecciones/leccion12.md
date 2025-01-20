# Conectado a ProductService

En esta lección, estableceremos la conexión entre nuestra capa de `GraphQL` y la `capa de datos`. Para ello, utilizaremos los servicios específicos de cada `entidad`. Esto implica instanciar las clases de `servicio` correspondientes y aprovechar sus `métodos` para acceder y manipular los datos.

## Explicación detallada

Al conectar la capa de `GraphQL` con la `capa de datos`, estamos creando un puente que permite a nuestros clientes (`front-end`, `otras aplicaciones`) solicitar y modificar información a través de nuestras consultas `GraphQL`.

## ¿Qué implica esto?

* `Servicios por entidad`: Cada entidad de nuestro sistema (por ejemplo, `Productos`, `Usuarios`) tendrá su propio servicio. Este servicio expondrá métodos para realizar operaciones `CRUD` (Crear, Leer, Actualizar, Eliminar) sobre esa entidad.

* `Instanciación de servicios`: Dentro de nuestros `resolvers GraphQL`, instanciaremos los servicios correspondientes para poder llamar a sus métodos.

* `Acceso a datos`: Los métodos de los servicios se encargarán de `interactuar` con la `base de datos` u otras fuentes de datos para obtener o almacenar la información solicitada.

Ejemplo:

```JavaScript

// product.resolvers.js
const ProductService = require('../services/ProductService');

const resolvers = {
  Query: {
    products: async () => {
      const productService = new ProductService();
      return productService.getAllProducts();
    }
  }
};
```

## Beneficios de esta estructura

* `Separación de responsabilidades`: La capa de `GraphQL` se encarga de la `lógica de las consultas` y `mutaciones`, mientras que la `capa de servicios` se encarga de la `lógica de acceso a datos`.

* `Reutilización de código`: Los servicios pueden ser reutilizados en diferentes partes de la aplicación.

* `Facilidad de prueba`: Es más sencillo probar los servicios de forma aislada.

Consideraciones adicionales:

* `Manejo de errores`: Es importante implementar un manejo adecuado de errores en los servicios para garantizar la robustez de la aplicación.

* `Transacciones`: Si es necesario realizar múltiples operaciones en una misma transacción, los servicios deben proporcionar mecanismos para ello.

* `Performance`: Es recomendable optimizar los servicios para garantizar un buen rendimiento, especialmente en caso de altas cargas.
