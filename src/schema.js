
import { makeExecutableSchema } from 'graphql-tools'
import { resolvers } from "./resolvers";

const typeDefs = `
    
  type Query {
    hello: String
    greet(name: String!): String
    tareas : [Tarea]
  }

  type Tarea{
      id: ID
      name: String!
      description: String!
      number: Int
  }

  type Mutation{
      crearTarea(input: TareaInput) : Tarea
  }

  input TareaInput{
      name: String!
      description: String!
      number: Int
  }

`;

export default makeExecutableSchema({
    typeDefs:typeDefs,
    resolvers: resolvers
})

