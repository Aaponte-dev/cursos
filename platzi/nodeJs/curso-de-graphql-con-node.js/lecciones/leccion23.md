# GraphQL vs. API REST

|  Característica |     API REST    |     GraphQL     |
|:---------------:|:---------------:|:---------------:|
|`Control de datos` |Servidor (proporciona datos fijos)|Cliente (solicita los datos exactos)|
|`Cantidad de datos`|Puede devolver datos innecesarios|Devuelve solo los datos solicitados|
|`Número de solicitudes`|Requiere múltiples solicitudes para obtener datos relacionados| Una sola solicitud para obtener todos los datos necesarios|
|`Endpoints`|Múltiples endpoints para diferentes recursos|Un único endpoint para todas las consultas|
|`Dependencia de equipos`|Mayor dependencia entre equipos (backend y frontend)|Mayor independencia entre equipos|

## Explicación detallada

* `Control de datos`: `REST` otorga al servidor el control sobre la estructura y cantidad de datos devueltos, mientras que `GraphQL` permite al cliente definir exactamente qué datos necesita.

* `Cantidad de datos`: Las `API REST` suelen devolver más datos de los necesarios, lo que puede generar sobrecarga en la red. `GraphQL` evita esto al permitir al cliente solicitar solo los campos requeridos.

* `Número de solicitudes`: En `REST`, es común realizar múltiples solicitudes para obtener datos relacionados. `GraphQL` reduce el número de solicitudes al permitir consultas anidadas.

* `Endpoints`: `REST` utiliza múltiples endpoints para diferentes recursos, lo que puede dificultar la evolución de la `API`. `GraphQL` utiliza un único endpoint, simplificando la gestión.

* `Dependencia de equipos`: `REST` requiere una mayor coordinación entre equipos de backend y frontend, ya que los cambios en la API pueden afectar a ambos. `GraphQL` otorga más autonomía al frontend.
