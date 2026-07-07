# API GraphQL de Videojuegos

## Descripción

Este proyecto implementa una API GraphQL que permite consultar información relacionada con videojuegos.
La API utiliza una fuente de datos en memoria mediante arreglos de JavaScript, simulando una base de datos.

El sistema maneja tres entidades principales:

* Videojuego
* Categoría
* Desarrolladora

Cada videojuego pertenece a una categoría y a una desarrolladora. Además, una categoría puede tener varios videojuegos y una desarrolladora puede estar asociada a varios videojuegos.

## Tecnologías utilizadas

* Node.js
* GraphQL
* Apollo Server
* JavaScript

## Entidades del sistema

### Videojuego

Representa un videojuego registrado en la API.

Campos principales:

* `id`
* `titulo`
* `plataforma`
* `anioLanzamiento`
* `precio`
* `categoria`
* `desarrolladora`

### Categoría

Representa la clasificación del videojuego.

Campos principales:

* `id`
* `nombre`
* `descripcion`
* `videojuegos`

### Desarrolladora

Representa la empresa o estudio encargado del desarrollo del videojuego.

Campos principales:

* `id`
* `nombre`
* `pais`
* `fundacion`
* `videojuegos`

## Instalación

Instalar las dependencias:

```bash
npm install
```

## Ejecución


```bash
npm run dev
```

El servidor se ejecutará en:

```txt
http://localhost:4000/
```

Desde esa dirección se puede acceder a Apollo Sandbox para probar las consultas GraphQL.

## Consultas GraphQL de prueba

### Consultar todos los videojuegos

```graphql
query {
  videojuegos {
    id
    titulo
    plataforma
    anioLanzamiento
    precio
  }
}
```

### Consultar videojuegos con categoría y desarrolladora

```graphql
query {
  videojuegos {
    titulo
    plataforma
    categoria {
      nombre
      descripcion
    }
    desarrolladora {
      nombre
      pais
    }
  }
}
```

### Consultar un videojuego por ID

```graphql
query {
  videojuego(id: "2") {
    titulo
    precio
    anioLanzamiento
    categoria {
      nombre
    }
    desarrolladora {
      nombre
      fundacion
    }
  }
}
```

### Consultar todas las categorías con sus videojuegos

```graphql
query {
  categorias {
    nombre
    descripcion
    videojuegos {
      titulo
      plataforma
    }
  }
}
```

### Consultar todas las desarrolladoras con sus videojuegos

```graphql
query {
  desarrolladoras {
    nombre
    pais
    fundacion
    videojuegos {
      titulo
      anioLanzamiento
    }
  }
}
```

### Consultar videojuegos por categoría

```graphql
query {
  videojuegosPorCategoria(categoriaId: "1") {
    titulo
    plataforma
    categoria {
      nombre
    }
  }
}
```

### Consultar videojuegos por desarrolladora

```graphql
query {
  videojuegosPorDesarrolladora(desarrolladoraId: "1") {
    titulo
    plataforma
    desarrolladora {
      nombre
      pais
    }
  }
}
```

## Fuente de datos

La API utiliza arreglos en memoria como fuente de datos.
Estos arreglos se encuentran en el archivo:

```txt
src/data/data.js
```

La información almacenada corresponde a videojuegos, categorías y desarrolladoras.

## Schema GraphQL

El schema GraphQL se encuentra en:

```txt
src/graphql/typeDefs.js
```

En este archivo se definen los tipos de datos y las consultas disponibles para el cliente.

## Resolvers

Los resolvers se encuentran en:

```txt
src/graphql/resolvers.js
```

Los resolvers contienen la lógica encargada de responder las consultas GraphQL y relacionar las entidades entre sí.
