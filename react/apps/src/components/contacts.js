import { useState } from "react";

const contacts=[
    {
        name:"bensu",
        number:"05127894563",
    },
    {
        name:"deniz",
        number:"05896522163",
    },
    {
        name:"alperen",
        number:"05658934563",
    },
    {
        name:"useyma",
        number:"05127890014",
    },
    {
        name:"miray",
        number:"05778894563",
    },
    {
        name:"funda",
        number:"05127894578",
    },
];

var list=[];


function FindContact(){
    const [searchKey, setSearchKey]=useState({name:"", number:""});
    const onChangeInput=(event)=>{
       setSearchKey({...searchKey,[event.target.name]:event.target.value});
       var key=event.target.value;

       list=contacts.filter((item)=>item.name==key);        
       
       
    }
    
    
    return(
        <>   
        <h1>search for contacts</h1>
        <input name="name" value={searchKey.name} onChange={onChangeInput} ></input>
   
        
        {list.map((item,index) => (
        <div key={index}>{item.name} <br/> {item.number}</div>
    ))}

        </>

    );

   

}

export default FindContact;