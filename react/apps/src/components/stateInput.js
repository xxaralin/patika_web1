import { useState } from "react";

function StateInput(){
    const [name, setName]=useState("name here");
    const [surname, setSurname]=useState("surname here");

    const onChangeName=(event)=>setName(event.target.value)
    const onChangeSurName=(event)=>setSurname(event.target.value)
    return(
        <div>
            <h1>please enter a name</h1> 
            <input type="text" value={name} 
            onChange={onChangeName}></input>
            <br/>

            <h1>please enter a surname</h1> 
            <input type="text" value={surname} 
            onChange={onChangeSurName}></input>
            <br/>
            {name} {surname}
        </div>

    )
};

function StateInput2(){
    const [form, setForm]=useState({name:"",surname:""})

    const onChangeInput=(event)=>{
    setForm({...form, [event.target.name] : event.target.value});
}
    return(
        <div>
            <h1>please enter a name</h1> 
            <input name="name" value={form.name} 
            onChange={onChangeInput}></input>
            <br/>

            <h1>please enter a surname</h1> 
            <input name="surname" value={form.surname} 
            onChange={onChangeInput}></input>
            <br/>
            {form.name} {form.surname}
        </div>

    )
    }

export default StateInput2;