import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';

const db = [
  { title: "Rich Dad, Poor Dad", author: "Robert Kyozaky" }
]

const typeDefs = `#graphql
  type Book {
    title: String
    author: String
  }
  type Query {
    books: [Book]
  }
`;

const resolvers = {
  Query: {
    async books() {
      return db
    }
  },
}
const server = new ApolloServer({
  typeDefs,
  resolvers
});

const { url } = await startStandaloneServer(server, {
  listen: {
    port: 4000,
  },
});
console.log(`Server is ready at post ${url}`);


