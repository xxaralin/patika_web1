import {Link} from "react-router-dom";
import { useEffect, useState } from "react";
import {useParams } from   "react-router-dom";
import axios from 'axios';



function User() {
    const [user, setUser]=useState({});
    const [isLoading, setIsLoading]=useState(true);

    const {id}= useParams();
    useEffect(()=>{
        axios(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then(res=>setUser(res.data))
        .finally(()=>setIsLoading(false));
    }, [id]);
  return (
    <div>
      <h1> User Detail </h1>
      { isLoading && <div>Loading...</div>}    
      <code>{JSON.stringify(user)}</code>

      <Link to={`/users/${parseInt(id) + 1}`}>Next User</Link>
    </div>
  )
}

export default User;