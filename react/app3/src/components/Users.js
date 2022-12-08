import {NavLink, Switch, Route, useRouteMatch} from "react-router-dom";
import {useEffect, useState} from "react"
import axios from 'axios';
import User from './User.js';

function Users() {

  const [users, setUsers]=useState([]);
  const [isLoading, setIsLoading]=useState(true);

  const { path, url } = useRouteMatch();


  useEffect(()=>{
      axios("https://jsonplaceholder.typicode.com/users")
      .then(res=> setUsers(res.data))
      .finally(()=>setIsLoading(false));
  }, []);

  return (
    <div>
      <h1>Users</h1>
      {   isLoading && <div>Loading...</div>}
      <ul>
       
          {users.map((user)=>(
            <li key={user.id}>
            <NavLink activeClassName="liactive" to={`${url}/${user.id}`}>{user.name}</NavLink>
            </li>
          ))}        
      </ul>

      <Switch>
        <Route exact path={path}>
          <h3>Please select a User.</h3>
        </Route>
        <Route path={`${path}/:id`} component={User}></Route>
      </Switch>
    </div>
  )
}
export default Users;

