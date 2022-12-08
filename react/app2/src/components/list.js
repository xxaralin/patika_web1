import { useState } from "react";
import Form from "./form";


function List({addTodo,todoList }) {

    const completeButton=((event)=>{
        event.target.parentElement.className=="completed"?
        event.target.parentElement.className="view":
        event.target.parentElement.className="completed"  
    });

    const destroyButton=((event)=>{
        event.target.parentNode.childNodes[1].className="destroy";
    });

    const [form,setForm]=useState(todoList);
    const [editing, setEditing] = useState(true);
    

    const onChangeInput=((index,event)=>{
              

        event.preventDefault();  
        const newTodo=[...todoList];
        newTodo[index].label=event.target.value;
        setForm(newTodo)

        
        
    })

    const handleKeyDown=((event)=>{
        if (event.key === 'Enter') {
            console.log("enterlandınız")
            setEditing(true)
            event.target.parentElement.className="" 
            }

    })
    const setEditTrue=((event)=>{ 

       setEditing(false)
       event.target.parentElement.className="editing"         
       console.log(event)
       

    })

    const completeAll=((event)=>{
        console.log(event)
       // completeButton(event.target.nextSibling.nextSibling.childrenNodes[0])
        event.target.nextSibling.nextSibling.childrenNodes[0].children[0].checked=true;
        

    })
   

    return (
        <div className="App">
            <section className="todoapp">
                <section className="main">
                    <input type="checkbox" onClick={completeAll} />
                    <label htmlFor="toggle-all"> Mark all as complete </label>
                    

                    <ul className="todo-list">
                        {todoList.map((item, index) => (
                            <li key={index} >  
                                                          
                                <input className="toggle" onClick={completeButton} type="checkbox" />
                               
                                 {editing 
                                ? ( <label onClick={setEditTrue}>{item.label}</label>                                     
                                ): (
                                                                      
                                    <input className="edit" name="label" value={todoList[index].label} onKeyDown={handleKeyDown} onChange={(e) => { onChangeInput(index, e) }} />
                                    
                                    
                                    )
                                } 
                                
                                <button className="destroy"onClick={destroyButton}></button>
                            </li>
                            
                            
                        ))}
                        
                           
                    </ul>
                </section>

                <footer className="footer">
                    <span className="todo-count">
                        <strong>2</strong>
                        items left
                    </span>

                    <ul className="filters">
                        <li>
                            <a href="#/" className="selected">All</a>
                        </li>
                        <li>
                            <a href="#/">Active</a>
                        </li>
                        <li>
                            <a href="#/">Completed</a>
                        </li>
                    </ul>

                    <button className="clear-completed">
                        Clear completed
                    </button>
                </footer>
            </section>

            <footer className="info">
                <p>Click to edit a todo</p>
                <p>Created by <a href="https://d12n.me/">Dmitry Sharabin</a></p>
                <p>Part of <a href="http://todomvc.com">TodoMVC</a></p>
            </footer>

        </div>
    );

}

export default List;