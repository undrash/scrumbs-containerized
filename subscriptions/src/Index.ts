

import "reflect-metadata";

require( "dotenv" ).config();

import SubscriptionController from "./controllers/SubscriptionController";
import { makeExecutableSchema } from "graphql-tools";
import { resolvers } from "./modules/Resolvers";
import * as graphqlHTTP  from "express-graphql";
import { importSchema } from "graphql-import";
import {  Request, Response } from "express";
import { GraphQLServer } from "graphql-yoga";
import { createConnection } from "typeorm";
import * as bodyParser from "body-parser";
import * as path from "path";
import * as cors from "cors";
import * as express from "express";

const typeDefs = importSchema( path.join( __dirname, "./modules/Schema.graphql" ) );


const server = new GraphQLServer( { typeDefs, resolvers } );
server.use( bodyParser.json() );
server.use( cors() );


server.use( "/public", express.static( path.join( __dirname, "public" ) ) );


const schema = makeExecutableSchema({
    typeDefs,
    resolvers,
});


/** GRAPHQL ENDPOINT */
server.use('/graphql', (req: Request, res: Response) => {

    return graphqlHTTP({
        schema,
        context: {req, res},
    })(req, res);
});


/** HTTP ENDPOINT */
server.use( "/http", SubscriptionController );


createConnection().then( () => {
    server.start(() => console.log( `Server is running on localhost:4000` ) );
});


