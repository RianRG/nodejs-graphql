import 'reflect-metadata';

import path from 'path';

import { ApolloServer } from 'apollo-server';
import { buildSchema } from 'type-graphql';
import { StudentResolver } from './resolvers/student.resolver';

async function main(){
  const schema = await buildSchema({
    resolvers: [
      StudentResolver
    ],
    emitSchemaFile: path.resolve(__dirname, 'schema.gql'),
    validate: true
  })

  const server = new ApolloServer({
    schema
  });

  const { url } = await server.listen();

  console.log(`runnin on ${url}`);
}
main();