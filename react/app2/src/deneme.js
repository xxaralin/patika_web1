// import React, { useState } from "react"

// function UserComponent () {
//   const [user, setUser] = useState([{
//     firstName: "Fred",
//     lastName: "Jones",
//     email: "fred@jones.com",
//   },
//   {
//     firstName: "bok",
//     lastName: "kaka",
//     email: "mal@aptal.com",
//   }
//  ])
//   const [editing, setEditing] = useState(false)
//   const handleChange=(e,index)=>{
//     const newUsers=[...user];
//     newUsers[index].firstName=e.target.value;
//     setUser(newUsers);

//   }
//   return(
//     <div>
//     {user.map((Users, index) => {
//         return (
//           <div onClick={() => {
//               handleChange(e,index);
//             }}
//             key={index}>
//             <List key={index} name={Users.name} 
//               rollNo={Users.rollNo} />
//           </div>
//         );
//       })}
//     </div>
//   );
  

// //   return (
// //     <form>
// //         {user.map((index,item)=>(
             
// //              <div key={index}>
// //                  <div >
// //                      <label htmlFor="lastName">Last Name: </label>
// //                      {editing ? (
// //                          <input
// //                              name="lastName"
// //                              onChange={event =>
// //                                  setUser({ ...user, lastName: event.target.value })
// //                              }
// //                              value={user.lastName}
// //                          />
// //                      ) : (
// //                          <span>{user.lastName}</span>
// //                      )}
// //                  </div>
 
// //                  <div>
// //                      <label htmlFor="email">Email: </label>
// //                      {editing ? (
// //                          <input
// //                              name="email"
// //                              onChange={event => setUser({ ...user, email: event.target.value })}
// //                              value={user.email}
// //                          />
// //                      ) : (
// //                          <span>{user.email}</span>
// //                      )}
// //                  </div>
 
// //                  <div>
// //                      <label htmlFor="email">Email: </label>
// //                      {editing ? (
// //                          <input
// //                              name="email"
// //                              onChange={event => setUser({ ...user, email: event.target.value })}
// //                              value={user.email}
// //                          />
// //                      ) : (
// //                          <span>{user.email}</span>
// //                      )}
// //                  </div>
 
// //                  {editing ? (
// //                      <button type="button" onClick={() => setEditing(false)}>
// //                          Click To Save
// //                      </button>
// //                  ) : (
// //                      <button type="button" onClick={() => setEditing(true)}>
// //                          Click to Edit
// //                      </button>
// //                  )}
 
 
// //              </div>

// //         ))}
      

      
// //     </form>
// //   )
// }

// export default UserComponent;





{todoList.map((item, index) => (
    <li key={index}>                            
        <input className="toggle" onClick={completeButton} type="checkbox" />
       
        {editing 
        ? ( <label onClick={setEditTrue}>{item.label}</label>                                     
        ): (<label>                                                                      
            <input name="label" value={todoList[index].label} onKeyDown={handleKeyDown} onChange={(e) => { onChangeInput(index, e) }} />
            </label>)
        } 
        <button className="destroy"onClick={destroyButton}></button>
    </li>
))}