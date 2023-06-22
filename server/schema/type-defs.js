const {gql}=require("apollo-server");

const typeDefs=gql`
   type User{
    id: ID!
    name: String!
    username: String!
    age: Int!
    nationality: Nationality!
    friends:[User]
    favMovies:[Movie]
   }
   type Movie{
    id:ID!
    name:String!
    year:Int!
    Screening:Boolean!
   }
   type Query{
      users:[User!]!
      getUser(id:ID!):User!
      movies:[Movie!]!
      getMovie(name:String!):Movie!
   }
   input CreateUserInput{
      name: String!
      username: String!
      age: Int!
      nationality: Nationality = CANADA
   }
   input UpdateUserInput{
      id:ID!
      newUsername:String!
   }
   type Mutation{
    createUser(input : CreateUserInput! ): User!
    updateUser(input : UpdateUserInput! ) : User
    deleteUser(id:ID!):User
   }
   enum Nationality{
    CANADA
    BRAZIL
    INDIA
    GERMANY
    CHILE
   }
`;
module.exports={typeDefs};