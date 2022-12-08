import { useEffect, useState } from 'react';
import List from './list/index.js';
import Form from './form/index.js';
import "./style.css"


function Contacts() {
  const [contacts, setContacts]=useState([
    {
        fullname:"bensu",
        pnumber:"05127894563",
    },
    {
        fullname:"deniz",
        pnumber:"05896522163",
    },
    {
        fullname:"alperen",
        pnumber:"05658934563",
    },
    {
        fullname:"useyma",
        pnumber:"05127890014",
    },
    {
        fullname:"miray",
        pnumber:"05778894563",
    },
    {
        fullname:"funda",
        pnumber:"05127894578",
    },
]);

  useEffect(()=>{
    console.log(contacts);
  }, [contacts]);


  return (
    <div id="container">
      
      <List showList={contacts}/>
      <Form addContact={setContacts} contacts={contacts}/>
      
    </div>
  );
}

export default Contacts;