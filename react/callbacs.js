// import fetch from "node-fetch";
import axios from "axios";
 /* fetch("https://jsonplaceholder.typicode.com/users/10")
.then((data)=>data.json())
.then((user1) => {console.log("users are loaded",user1)
    fetch("https://jsonplaceholder.typicode.com/posts/1")
    .then((data)=>data.json())
    .then((post1)=>{console.log("post 1 is loaded",post1)
        fetch("https://jsonplaceholder.typicode.com/posts/2")
        .then((data)=>data.json())
        .then((post2)=>{console.log("post 2 is loaded",post2)
        })
    })

}); */



/*
async function getData(){
    const users=await(
        await fetch("https://jsonplaceholder.typicode.com/users")
    ).json();

    const post1=await(
        await fetch("https://jsonplaceholder.typicode.com/posts/1")
    ).json();

    const post2=await(
        await fetch("https://jsonplaceholder.typicode.com/posts/2")
    ).json();


     console.log("users",users);
     console.log("post1",post1);
     console.log("post2",post2);
    
}
 getData(); */

 //old version

//  (async()=>{
//     const users=await(
//         await fetch("https://jsonplaceholder.typicode.com/users")
//     ).json();

//     const post1=await(
//         await fetch("https://jsonplaceholder.typicode.com/posts/1")
//     ).json();

//     const post2=await(
//         await fetch("https://jsonplaceholder.typicode.com/posts/2")
//     ).json();


//      console.log("users",users);
//      console.log("post1",post1);
//      console.log("post2",post2);
//  } )();

//new version


//  (async()=>{
//     const {data : users}=await axios("https://jsonplaceholder.typicode.com/users");

//     const {data : post1}=await axios("https://jsonplaceholder.typicode.com/posts/1");

//     const {data : post2}=await axios("https://jsonplaceholder.typicode.com/posts/2");


//      console.log("users",users);
//      console.log("post1",post1);
//      console.log("post2",post2);
//  } )();


//promise

// const getComments=() =>{
//     return new Promise((resolve, reject)=>{
//         resolve("resolved w success");
//     });
// };

// getComments()
//     .then((data)=>console.log(data))
//     .catch((e)=>console.log(e));
// //promise başarılı olursa yani resolve olursa data then kısmına düşer
// //bir hata olursa da catch kısmı yakalar

const getUsers = ()=>{
    return new Promise(async(resolve,reject)=>{
        const { data }=await axios("https://jsonplaceholder.typicode.com/users");
       //resolve(data);
       reject("a problem has occured");
    });
};

const getPost=()=>{
    return new Promise(async(resolve, reject)=>{
        const {post1}=await axios("https://jsonplaceholder.typicode.com/posts/1");
        resolve(post1);
        //reject("another problem has occured");
    });
};


(async()=>{
    try{
         const users=await getUsers();
    const posts=await getPost();

    console.log(users);
    console.log(posts);   
    }

    catch(e){
       console.log(e); 
    }
}
)();
