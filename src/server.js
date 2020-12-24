/*
  Este modulo se encarga de crear una instancia 
  para el server y cargar los typeDefs y sus
  resolvers.  
*/
import { GraphQLServer } from "graphql-yoga";
import path from "path";
import resolvers from "./graphql/resolvers";

export const server = new GraphQLServer({
  typeDefs: path.join(__dirname, "graphql/schema.graphql"),
  resolvers,
});
