//const express = require('express');

import express from "express";
import {graphqlHTTP} from "express-graphql";
import {buildSchema} from 'graphql';
import schema from "./schema"

//var { buildSchema } = require('graphql');

const app = express();

var root = { hello: () => "Hello world!" };

app.use('/graphql', graphqlHTTP({
    schema:schema,
    //rootValue: root,
    graphiql:true,
}))

app.listen(4000, () => console.log(`Servidor corriendo en el puerto 3000`));