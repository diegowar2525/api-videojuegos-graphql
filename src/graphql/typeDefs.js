export const typeDefs = `#graphql
  type Videojuego {
    id: ID!
    titulo: String!
    plataforma: String!
    anioLanzamiento: Int!
    precio: Float!
    categoria: Categoria!
    desarrolladora: Desarrolladora!
  }

  type Categoria {
    id: ID!
    nombre: String!
    descripcion: String!
    videojuegos: [Videojuego!]!
  }

  type Desarrolladora {
    id: ID!
    nombre: String!
    pais: String!
    fundacion: Int!
    videojuegos: [Videojuego!]!
  }

  type Query {
    videojuegos: [Videojuego!]!
    videojuego(id: ID!): Videojuego

    categorias: [Categoria!]!
    categoria(id: ID!): Categoria

    desarrolladoras: [Desarrolladora!]!
    desarrolladora(id: ID!): Desarrolladora

    videojuegosPorCategoria(categoriaId: ID!): [Videojuego!]!
    videojuegosPorDesarrolladora(desarrolladoraId: ID!): [Videojuego!]!
  }
`;