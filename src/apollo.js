import ApolloClient from "apollo-client";
import { InMemoryCache } from "apollo-cache-inmemory";
import { split, concat } from "apollo-link";
import { setContext } from "apollo-link-context";
import { HttpLink } from "apollo-link-http";
import { WebSocketLink } from "apollo-link-ws";
import { getMainDefinition } from "apollo-utilities";
import * as ws from "ws";
import fetch from "node-fetch";
import Auth from "./auth";

const headers = {
  "content-type": "application/json",
};
const getHeaders = () => {
  return headers;
};

const cache = new InMemoryCache();

const wsLink = new WebSocketLink({
  uri: "ws://api.teessidehackspace.org.uk/v1/graphql",
  options: {
    reconnect: true,
    lazy: true,
    connectionParams: () => {
      return { headers: getHeaders() };
    },
  },
  webSocketImpl: ws,
});

const httpLink = new HttpLink({
  uri: "https://api.teessidehackspace.org.uk/v1/graphql",
  headers: getHeaders(),
  fetch: fetch,
});

const authLink = setContext(async (_, { headers }) => {
  const user = await Auth.getUser();

  return {
    headers: {
      ...headers,
      Authorization: "Bearer " + user.access_token || null,
    },
  };
});

const link = split(
  ({ query }) => {
    const { kind, operation } = getMainDefinition(query);
    return kind === "OperationDefinition" && operation === "subscription";
  },
  wsLink,
  concat(authLink, httpLink)
);

export const client = new ApolloClient({
  link,
  cache,
});
