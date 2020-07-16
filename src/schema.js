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

type Comment{
    comment: String
}

enum PosterSize {
    MEDIUM
    ORIGINAL
}

type Query {
    shows(page: Int!): [Show]!
    search(name: String!): [Show]!
    show(showId: Int!): Show
    favorites(userId: String!): [Show]
    schedule(userId: String!): [Show]
    comment(userId: String!,showId: String!): Comment
    allDetails: [Show]!
    me: User
}

type Mutation {
    signup(name: String!, email: String!, password: String!): AuthResponse!
    login(email: String!, password: String!): AuthResponse!
    addFavorite(userId: String!, showId: String!, addToFavorites: Boolean!): AuthResponse!
    addSchedule(userId: String!, showId: String!, addToSchedule: Boolean!): AuthResponse!
    addComment(userId: String!, showId: String!, comment: String!): AuthResponse!
}

type ShowUpdateResponse{
    success: Boolean!
    message: String
    show: Show
}

type AuthResponse{
    success: Boolean!
    message: String
    id: String
    flag: Boolean!
}
`;
//login(email: String, password: String): String
module.exports = typeDefs;