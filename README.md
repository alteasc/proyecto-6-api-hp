# API sobre el universo Harry Potter ⚡️


Con esta API se pretende crear un lugar en el que se puedan añadir, actualizar, crear y borrar todos los personajes del universo de Harry Potter.


## Librerías instaladas para el desarrollo del proyecto

- DOTENV: para el uso de las variables de entorno
- EXPRESS: para el correcto funcionamiento del servidor
- MONGOOSE: para la conexión y uso de la BBDD MongoDB
- NODEMON: para poder ver los cambios y desarrollar el proyecto más cómodamente, como dependencia del desarrollador.

Ejemplo de instalación de estas librerías
```sh
cd proyecto-6-api-hp
npm i express dotenv
```

## Instalación 🔧

Para trabajar, en el archivo `${package.json.version}` se crean tres scripts, dos de ellos al comienzo para poder trabajar cómodamente y el tercero referente a la "semilla" de una de las colecciones de la BBDD:

```sh
"start": "node index.js"
"dev": "nodemon index.js"
```


## Desarrollo del proyecto ⚙️

Se ha levantado el servidor en: http://localhost:3000
Se han realizado dos colecciones de datos, referentes a los personajes y a los colegios de magia. Relacionando la primera con la segunda y viceversa. De ambas se ha realizado un CRUD completo. Las rutas base para cada colección han sido:
- /api/v1/characters: Colección CHARACTERS
- /api/v1/magicSchools: Colección MAGICSCHOOLS

Partiendo de las rutas anteriores el:
CRUD COLECCIÓN "CHARACTERS"


- "/": para método GET (obtener todos los personajes creados) y para método POST (crear un personaje nuevo).
- "/:id": para método PUT (actualizar un dato de un determinado personaje) y para método DELETE (borrar un personaje en concreto).
- "/getByEspecie/:especie": para obtener sólo los personajes que cumplan con una de las especies existentes en el universo de Harry Potter.


CRUD COLECCIÓN "MAGICSCHOOLS"

- "/": para método GET (obtener todas las escuelas de magia creadas) y para método POST (crear una escuela de magia nueva).
- "/:id": para método PUT (actualizar un dato de una determinada escuela de magia) y para método DELETE (borrar una escuela de magia en concreto).
- "/getByEspecie/:especie": para obtener sólo los personajes que cumplan con una de las especies existentes en el universo de Harry Potter.
- "/:id": para método GET y obtener los datos relativos a una escuela de magia en concreto.
- "/:id/alumnos": para obtener los alumnos que forman parte de una escuela en concreto.

> Note: Para subir los datos de la colección MAGICSCHOOLS, se ha recurrido al uso de una semilla, en la que se encuentran los datos de las escuelas de magia más relevantes. Se encuentra en "./utils/seeds"

## Autores ✒️

Desarrolladora: Altea Segura Cáliz para Rock The Code

Documentación: https://harrypotter.fandom.com/es/wiki/HarryPotter_Wiki

## License

**Free Software, Hell Yeah!**
