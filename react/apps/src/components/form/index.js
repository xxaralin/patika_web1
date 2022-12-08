import { useState } from "react";

function Form({addContact, contacts}){
    const [form, setForm]=useState({fullname:"", pnumber:""});

    const onChangeInput=(event)=>{
       setForm({...form, [event.target.name]: event.target.value});
       
    };

    const onSubmitForm=(event)=>{
        event.preventDefault();

        if(form.fullname===""|| form.pnumber===""){
            return false;
        }
        
        addContact([...contacts, form]);
        console.log(form)            
        

    };

    return(
    <form onSubmit={onSubmitForm}>         
        <h1>Add New Contact</h1>
        <div>
        <input name="fullname"  placeholder="Name" onChange={onChangeInput}></input>
        </div>

        <div>
        <input name="pnumber" placeholder="Phone Number" onChange={onChangeInput}></input>
        </div>
        
        <br/>
        <div className="btn">
        <button>Add Contact</button>
        </div>

        
    </form>
    )
}

export default Form;