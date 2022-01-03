import { tareas } from './sample'

export const resolvers = {
  Query: {
    hello: () => {
      return "Hola mundo con graphql";
    },
    greet: (root, args) => {
      return `Hello ${args.name}`;
    },
    tareas: () =>{
        return tareas
    }
  },
  Mutation:{
      crearTarea(_, {input}){
        console.log(input)
        return null
      }
  }
};