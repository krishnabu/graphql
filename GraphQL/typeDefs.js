export const typeDefs =`
   #graphql server
   type Book{
      id:ID!
      title:String!
      rolnum:Int
      author:Author
   }
   type Author{
      id:ID!
      name:String!
   }
   type Query{
      books:[Book]
      authors:[Author]
   }
`
