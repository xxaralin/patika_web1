import {useState} from "react";

function Form({addTodo, todoList}){
    const [form,setForm]=useState({label:"" ,completed:false});
    const onChange=(event)=>{
        setForm({...form,[event.target.name]:event.target.value})

        
    }
    const FormOnClick=((event)=>{
        event.preventDefault();        
        addTodo([...todoList,form]);        
 
    })

    return(    
        <div className="App">
            <section className="todoapp">
        <header className="header">
            <h1>todos</h1>
            <form onSubmit={FormOnClick}>
                <input name="label" className="new-todo" placeholder="What needs to be done?" onChange={onChange} autoFocus />
            </form>
        </header>
        </section>
        </div>
    )

}

export default Form;


