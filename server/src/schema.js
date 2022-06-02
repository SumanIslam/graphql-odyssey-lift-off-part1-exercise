const gql = require('apollo-server');

const typeDefs = gql`
  "A Track is a group of module that teaches about a specific topic"
  type Track {
    id: ID!
    title: String!
    author: Author!
    thumbnail: String
    length: Int
    moduleCount: Int
  }
`;

module.exports = typeDefs;