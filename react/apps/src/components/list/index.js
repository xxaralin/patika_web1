import React, { useState } from "react";
import Form from "../form";

function List({showList}){
    const [searchKey, setSearchKey]=useState("");
    const onChangeInput=(event)=>{
       setSearchKey(event.target.value);      
    }
    
    const filteredList=showList.filter((item)=>{
            return Object.keys(item).some((key)=>
                item[key].toString().toLowerCase()
                .includes(searchKey.toLowerCase())
            );
            
        });

    return(
    <div > 
        <h1>List of contacts</h1>

        <div>       
            <ul className="list">
                {filteredList.map((item, index)=>(
                    <li key={index}>
                        <span>{item.fullname}</span>
                        <span>{item.pnumber}</span>
                    </li>
                ))}            
            </ul>
        </div>  

        <span>Total number of contacts ({filteredList.length})</span>

        <form>
            <h1>search for contacts</h1>
            <input value={searchKey} 
            placeholder="Filter Contacts"
            onChange={onChangeInput} ></input>    
        </form>
    </div>
    );
}

export default List;
