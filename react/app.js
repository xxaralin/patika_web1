import axios from "axios"

// (async()=>{
//     const {data : users}=await axios("https://jsonplaceholder.typicode.com/users/1")
//     console.log(users)

// })();

const getData=(async(number)=>{
    const {data:user}=await axios("https://jsonplaceholder.typicode.com/users/"+number);
    console.log(user);

    const {data:post}=await axios("https://jsonplaceholder.typicode.com/posts/"+number);
    console.log(post);
})

    
getData(2);

export { getData};
