# Historial Cinta negra Devf día a día

Historial de las lecciones y ejercicios visto en el curso de cinta negra.

[GitHUb DevF](https://github.com/devfmx)

[GitHUb CRUD Graphql](https://github.com/devfmx/cinta-negra-crud-graphql)

## Día uno

**Express** [Documentación](https://expressjs.com/es/guide/routing.html)

Paquete para crear una REST Api en Nodejs. Con este podemos levantar un servidor de manera rápida con el método listen(), que recibe un puerto y un callback.

También crear los endpoints que vaya a tener nuestra aplicación. 

Cuando usamos Express también comúnmente debemos utilizar el paquete **body-parser** que nos sirve para parsear la data y poder trabajar con datos con estructura json en nuestros endpoints. Para usar **body-parser** solo debemos requerir el paquete y poner el siguiente middleware en la app de express que estamos iniciando.

```
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json())

```

**Mongo DB Atlas** [Página](https://www.mongodb.com/cloud/atlas)

Es un servicio que nos permite tener cluster para almacenar nuestras base de datos en MongoDB.

**Mongoose** [Documentación](https://mongoosejs.com)

Paquete para realizar esquemas para modelar los datos de su aplicación. Podemos validar qué datos y qué tipos va permitir nuestra bd, creación de consultas, enlaces de lógica de negocios y más, listos para usar.

**Insomnia** [Descargar](https://insomnia.rest/)

Cliente para realizar peticiones a endpoints, HTTP and GraphQL


**Ejercicio de la clase** [link GitHub](https://github.com/Masavi/cinta-negra-32-api)

En este ejercicio vimos cómo crear una Rest Api utilizando Express, con dos endpoints para agregar y consultar usuarios desde una base de datos Mongo, utilizando mongoose para la conexión y validación de los datos.

## Día dos

**ESLint** [Página](https://eslint.org/) Sirve para poner un estandar en la forma que escribimos nuestro código (guías de estilo para nuestro código). 

AIRBNB tiene una guía de estilosESLint airbnb https://github.com/airbnb/javascript 

**MOngo** GeoJson Mongo (https://docs.mongodb.com/manual/reference/geojson/)

geojson.io

https://www.npmjs.com/package/bcrypt

gensalt hashear una palabra


trigger base de datos relacionales son disparadores

mongo enum : es una lista de strings de los unico capaz de almacenar la bd, solo guarda lo que hay en la lista,

https://github.com/prisma/graphql-yoga

https://github.com/prisma/graphql-import archivos especiales .graph con esta los podemos importar sin ningun problema