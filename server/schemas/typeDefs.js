const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Message {
    name: String!
    email: String!
    messageText: String!
  }

  input MessageInput {
    name: String!
    email: String!
    messageText: String!
  }

  type Query {
    getMessage(id: ID!): Message!
    getMessages: [Message!]!
  }

  type Mutation {
    addMessage(message: MessageInput!): Message!
  }
`;

module.exports = typeDefs;
