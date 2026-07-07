export const categorias = [
    {
        id: '1',
        nombre: 'Aventura',
        descripcion: 'Videojuegos centrados en exploración, historia y resolución de problemas.'
    },
    {
        id: '2',
        nombre: 'Acción',
        descripcion: 'Videojuegos con combate, reflejos rápidos y desafíos dinámicos.'
    },
    {
        id: '3',
        nombre: 'RPG',
        descripcion: 'Videojuegos de rol donde el jugador mejora personajes y toma decisiones.'
    }
];

export const desarrolladoras = [
    {
        id: '1',
        nombre: 'Nintendo',
        pais: 'Japón',
        fundacion: 1889
    },
    {
        id: '2',
        nombre: 'FromSoftware',
        pais: 'Japón',
        fundacion: 1986
    },
    {
        id: '3',
        nombre: 'Santa Monica Studio',
        pais: 'Estados Unidos',
        fundacion: 1999
    }
];

export const videojuegos = [
    {
        id: '1',
        titulo: 'The Legend of Zelda: Breath of the Wild',
        plataforma: 'Nintendo Switch',
        anioLanzamiento: 2017,
        precio: 59.99,
        categoriaId: '1',
        desarrolladoraId: '1'
    },
    {
        id: '2',
        titulo: 'Elden Ring',
        plataforma: 'PC, PlayStation, Xbox',
        anioLanzamiento: 2022,
        precio: 69.99,
        categoriaId: '3',
        desarrolladoraId: '2'
    },
    {
        id: '3',
        titulo: 'God of War Ragnarök',
        plataforma: 'PlayStation',
        anioLanzamiento: 2022,
        precio: 69.99,
        categoriaId: '2',
        desarrolladoraId: '3'
    },
    {
        id: '4',
        titulo: 'Super Mario Odyssey',
        plataforma: 'Nintendo Switch',
        anioLanzamiento: 2017,
        precio: 49.99,
        categoriaId: '1',
        desarrolladoraId: '1'
    }
];