import { ApolloClient, InMemoryCache } from "@apollo/client"

// Create a client
const client = new ApolloClient({
    uri: "https://api.escuelajs.co/graphql",
    cache: new InMemoryCache()
})

export default client;
