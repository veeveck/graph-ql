const {UserList,MovieList}=require("../FakeData")
const _ = require("lodash");
const resolvers={
    Query:{
        users(){
            return UserList;
        },
        getUser: (parent,args)=>{
          const id=args.id;
          const user=_.find(UserList,{id:Number(id)});
          return user;

        },
        movies:()=>{
            return MovieList
        },
        getMovie:(parent, args)=>{
            const name=args.name;
            const movie=_.find(MovieList,{name});
            return movie;
        }
    },
    User:{
        favMovies:()=>{
            return _.filter(MovieList,(movie)=>
            movie.year>=2000 && movie.year<=2010)
        }
    },
    Mutation:{
        createUser:(parent,args)=>{
            const user=args.input;
            const lastId=UserList.at(-1).id;
            user.id=lastId+1;
            UserList.push(user);
            return user;
        },
        updateUser:(parent,args)=>{
            const {id,newUsername}=args.input;
            let updatedUser;
            UserList.forEach((user)=>{
                if(user.id === Number(id)){
                    user.username=newUsername;
                    updatedUser=user;
                }
            });
            return updatedUser;
        },
        deleteUser:(parent,args)=>{
            const id= args.id;
            _.remove(UserList,(user)=>user.id===Number(id));
            return null;
        }
    }
}
module.exports={resolvers};