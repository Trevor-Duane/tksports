import React from "react";
import { ApolloClient, InMemoryCache } from "@apollo/client";

//Initialise Apollo Client
const client = new ApolloClient({
    uri: `https://tksports.news/graphql`,
    cache: new InMemoryCache(),
});

export default client;
