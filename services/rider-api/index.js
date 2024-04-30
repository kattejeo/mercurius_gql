require("dotenv")
import { ApolloServer } from "@apollo/server";
import { buildSubgraphSchema } from "@apollo/subgraph";
import binder from "./binder"

const server = new ApolloServer({
    schema : buildSubgraphSchema(binder)
})


const { url } = await startStandaloneServer(server, {
    listen: {
      port : process.env.RIDER_API_PORT
    },
});

console.log(`Server is ready at post ${url}`);

