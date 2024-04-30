require("dotenv")
import { ApolloServer } from '@apollo/server';
import { ApolloGateway } from "@apollo/gateway"
import { startStandaloneServer } from '@apollo/server/standalone';


const gateway = new ApolloGateway({
  serviceList : [{ name : "rider-api", url :  "http://localhost:"+process.env.RIDER_API_PORT}]
})

const server = new ApolloServer({
  gateway,
  subscriptions: false,
});

const { url } = await startStandaloneServer(server, {
  listen: {
    port: process.env.GATEWAY_PORT,
  },
});

console.log(`Server is ready at post ${url}`);


