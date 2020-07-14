const { gql } = require('apollo-server');

const typeDefs = gql`
type Show {
    id: ID!
    name: String
    genres: [String]
    premiered: String
    seasons: [Seasons]
    crew: [Crew]
    image(size: PosterSize): String
    rating: String
    summary: String
}

type Crew {
    type: String
    person: Person
}

type Person {
    id: ID!
    name: String
    image(size: PosterSize): String
}

type Seasons {
    id: ID!
    number: Int
    episodes: Int
}

type User {
    id: ID!
    email: String!
    password: String!
    favorites: [Show]
    schedule: [Show]
}

enum PosterSize {
    MEDIUM
    ORIGINAL
}

type Query {
    shows: [Show]!
    search(name: String!): [Show]!
    favorites(showIds: [ID]!): [Show]!
    schedule(showIds: [ID]!): [Show]!
    me: User
}

type Mutation {
    favorite(showId: ID!): ShowUpdateResponse!
    schedule(showId: ID!): ShowUpdateResponse!
    login(email: String, password: String): String
}

type ShowUpdateResponse{
    success: Boolean!
    message: String
    show: Show
}
`;

module.exports = typeDefs;