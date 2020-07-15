const { gql } = require('apollo-server');

const typeDefs = gql`
type Show {
    id: Int!
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
    id: Int!
    name: String
    image(size: PosterSize): String
}

type Seasons {
    id: Int!
    number: Int
    episodes: Int
}

type User {
    id: Int!
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
    show(showId: Int!): Show
    favorites(showIds: [Int]!): [Show]
    schedule(showIds: [Int]!): [Show]
    me: User
}

type Mutation {
    favorite(showId: Int!): ShowUpdateResponse!
    schedule(showId: Int!): ShowUpdateResponse!
    login(email: String, password: String): String
}

type ShowUpdateResponse{
    success: Boolean!
    message: String
    show: Show
}
`;

module.exports = typeDefs;