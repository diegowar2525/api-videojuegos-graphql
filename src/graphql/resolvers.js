import { videojuegos, categorias, desarrolladoras } from '../data/data.js';

export const resolvers = {
    Query: {
        videojuegos: () => videojuegos,

        videojuego: (_, args) => {
            return videojuegos.find(videojuego => videojuego.id === args.id);
        },

        categorias: () => categorias,

        categoria: (_, args) => {
            return categorias.find(categoria => categoria.id === args.id);
        },

        desarrolladoras: () => desarrolladoras,

        desarrolladora: (_, args) => {
            return desarrolladoras.find(desarrolladora => desarrolladora.id === args.id);
        },

        videojuegosPorCategoria: (_, args) => {
            return videojuegos.filter(
                videojuego => videojuego.categoriaId === args.categoriaId
            );
        },

        videojuegosPorDesarrolladora: (_, args) => {
            return videojuegos.filter(
                videojuego => videojuego.desarrolladoraId === args.desarrolladoraId
            );
        }
    },

    Videojuego: {
        categoria: (parent) => {
            return categorias.find(categoria => categoria.id === parent.categoriaId);
        },

        desarrolladora: (parent) => {
            return desarrolladoras.find(
                desarrolladora => desarrolladora.id === parent.desarrolladoraId
            );
        }
    },

    Categoria: {
        videojuegos: (parent) => {
            return videojuegos.filter(videojuego => videojuego.categoriaId === parent.id);
        }
    },

    Desarrolladora: {
        videojuegos: (parent) => {
            return videojuegos.filter(
                videojuego => videojuego.desarrolladoraId === parent.id
            );
        }
    }
};