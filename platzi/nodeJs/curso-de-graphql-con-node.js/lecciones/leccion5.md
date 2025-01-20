# GraphQL desde Insomnia y Postman

Una vez que tienes tu servidor GraphQL en funcionamiento, es hora de probarlo y consumir los datos que expone. Para esto, utilizaremos herramientas como Insomnia y Postman, que son clientes HTTP populares.

## ¿Por qué usar Insomnia o Postman?

* Pruebas rápidas: Permiten realizar pruebas de forma ágil y sencilla, sin necesidad de escribir código adicional.

* Exploración de la API: Facilitan la exploración de la estructura de tu API GraphQL y la identificación de posibles errores.

* Documentación: Ayudan a documentar la API y a compartirla con otros desarrolladores.

## Configurando la solicitud

1. Selecciona el método: En ambos clientes, elige el método `POST`.

2. Ingresa la URL: Coloca la URL de tu endpoint GraphQL. Por ejemplo: <http://localhost:3000/graphql>

3. Define el cuerpo de la solicitud:

* Tipo de contenido: Selecciona "GraphQL" o "application/json".

* Cuerpo: Escribe tu consulta GraphQL. Por ejemplo:

```GraphQL
    {
        hello
    }
```
