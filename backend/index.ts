import 'reflect-metadata'

import { UserResolver } from './src/resolvers/UserResolver'

import { ApolloServer } from 'apollo-server'
import path from 'path'
import { buildSchema } from 'type-graphql'

async function main() {
  const schema = await buildSchema({
    resolvers: [UserResolver],
    emitSchemaFile: path.resolve(__dirname, 'schema.gql'),
  }) // resolvers: [__dirname + '/**/*.ts']

  const server = new ApolloServer({ schema }) // schema: schema

  const { url } = await server.listen()

  console.log(`Server ready at 🛸 ${url}`)
}

main()
