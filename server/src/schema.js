const { gql } = require('apollo-server');

const typeDefs = gql`
  "get tracks array for homepage grid"
  type Query {
    tracksForHome: [Track!]!
  }

  "A Track is a group of module that teaches about a specific topic"
  type Track {
    id: ID!
    "Tracks Title"
    title: String!
    "Tracks Main Author"
    author: Author!
    "Track's main illustration to display in track card or track page details"
    thumbnail: String
    "Tracks approximate time to complete, in minutes"
    length: Int
    "Number of modules Track contains"
    moduleCount: Int
  }

  "Author of a complete Track"
  type Author {
    id: ID!
    "Name of the Author"
    name: String!
    "URL that contains photo of the Author"
    photo: String
  }
`;


module.exports = typeDefs;