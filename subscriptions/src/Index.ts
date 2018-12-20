
import {  Request, Response } from "express";

import "reflect-metadata";

require( "dotenv" ).config();

import { makeExecutableSchema } from "graphql-tools";
import { resolvers } from "./modules/Resolvers";
import * as graphqlHTTP  from "express-graphql";
import { importSchema } from "graphql-import";
import { GraphQLServer } from "graphql-yoga";
import { createConnection } from "typeorm";
import * as path from "path";






const typeDefs = importSchema( path.join( __dirname, "./modules/Schema.graphql" ) );


const server = new GraphQLServer( { typeDefs, resolvers } );


const schema = makeExecutableSchema({
    typeDefs,
    resolvers,
});


// server.use( "/graphql", (req: Request, res: Response) => {
//     return graphqlHTTP( { schema, context: { req, res } } )(req, res);
// } );


server.use('/graphql', (req: Request, res: Response) => {

    return graphqlHTTP({
        schema,
        context: {req, res},
    })(req, res);
});


createConnection().then( () => {
    server.start(() => console.log( `Server is running on localhost:4000` ) );
});


