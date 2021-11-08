import {gql} from 'apollo-server-express'

export const typeDefs = gql`
type User{
name:String!
age:Int!
designation:String!
}

#Queries
type Query{
getAllUsers:[User!]!

}

#Mutations
type Mutation{
createUser(name:String!,age:Int!,designation:String!):User!
}

`
