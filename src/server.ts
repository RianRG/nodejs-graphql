import 'reflect-metadata';

import path from 'path';

import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import { buildSchema } from 'type-graphql';
import { StudentResolver } from './resolvers/student.resolver';

async function main(){
  const app = express();
  const schema = await buildSchema({
    resolvers: [
      StudentResolver
    ],
    emitSchemaFile: path.resolve(__dirname, 'schema.gql'),
    validate: true
  })

  const server = new ApolloServer({
    schema,
    context: ({ req, res }) => ({ req, res })
  });
  await server.start();
  server.applyMiddleware({ app });

  app.listen(4000, () =>{
    console.log('runnin on 4000')
  })
}
main();