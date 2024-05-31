export const resolvers ={
    Book:{
        author:(parent,args,context,info)=>{
            console.log(parent);
            return {
                id:1,
                name:"shiva"
            }
        }
    },
    Query:{
        books : ()=>{
            return [{
                id:1,
                title:"compilers",
                rolnum:20
            }]
        },
        authors: ()=>{
            return [{
                id:1,
                name:"shiva"
            }]
        }

    }
}