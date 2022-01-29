/*const posts = [
  {
    userId: 1,
    id: 1,
    title:
      "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
    body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
  },
  {
    userId: 1,
    id: 2,
    title: "qui est esse",
    body: "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla",
  },
  {
    userId: 1,
    id: 3,
    title: "ea molestias quasi exercitationem repellat qui ipsa sit aut",
    body: "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut",
  },
];*/

//CALLBACK: funcion que se pasa como argumento a otra funcion

/*const findPostById = (id, callback) => {
  const post = posts.find((item) => item.id === id);

  if (post) {
    callback(null, post);
  } else {
    callback("No se encontró el post con el id " + id);
  }
};

findPostById(1, (err, post) => {
  if (err) {
    return console.log(err);
  }
  console.log(post);

  */

//PROMESAS: es un objeto que representa la terminación o el fracaso de una operación asincrónica

/*const findPostById = (id) => {
  const post = posts.find((item) => item.id === id);
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (post) {
        resolve(post);
      } else {
        reject("No se encontró id " + id);
      }
    }, 2000);
    
  });
};

// findPostById(20)
//   .then((post) => console.log(post))
//   .catch((e) => console.log(e));

const buscar = async(id)=>{
  try{ 
  const post = await findPostById(id);
  console.log(post);
  }catch(error){
    console.log(error)
  }finally{
    console.log('se ejecuta sí o sí')
  }
}

buscar(1);


  console.log('Fin del código')
  */

const url = 'https://jsonplaceholder.typicode.com/posts/';

// FETCH retorna siempre una promesa

/*fetch(url).then((res) => res.json())
.then((data) => console.log(data))
.catch((e)=> console.log(e))
.finally(()=> console.log("Finalizó"));*/

const findPostById = async(id) =>{
  try {
    const res = await fetch(url + id);
    const post = await res.json();

    console.log(post)    
  } catch (error) {
    console.log(error);
  }
}
findPostById(29)