const UserList=[
    {
        id: 1,
        name: "John",
        username: "john",
        age: 20,
        nationality: "CANADA",
        friends: [
            {
              id: 2,
              name: "Vivi",
              username: "ViviTech",
              age: 20,
              nationality: "BRAZIL",
            },
            {
              id: 5,
              name: "Kelly",
              username: "kelly2019",
              age: 5,
              nationality: "CHILE",
            },
          ],
      },
      {
        id: 2,
        name: "Vivi",
        username: "ViviTech",
        age: 20,
        nationality: "BRAZIL",
      },
      {
        id: 3,
        name: "Sarah",
        username: "cameron",
        age: 25,
        nationality: "INDIA",
        friends: [
            {
              id: 2,
              name: "Vivi",
              username: "ViviTech",
              age: 20,
              nationality: "BRAZIL",
            },
          ],
      },
      {
        id: 4,
        name: "Rafe",
        username: "rafe123",
        age: 60,
        nationality: "GERMANY",
      },
      {
        id: 5,
        name: "Kelly",
        username: "kelly2019",
        age: 5,
        nationality: "CHILE",
      },
 ];
 const MovieList = [
    {
      id: 1,
      name: "Avengers Endgame",
      year: 2019,
      Screening: true,
    },
    {
      id: 2,
      name: "Interstellar",
      year: 2007,
      Screening: true,
    },
    {
      id: 3,
      name: "Superbad",
      year: 2009,
      Screening: true,
    },
    {
      id: 4,
      name: "ViviTech The Movie",
      year: 2035,
      Screening: false,
    },
  ];
 module.exports={UserList,MovieList}
