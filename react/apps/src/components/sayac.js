import { useState } from "react"
import '../App.css';

function Sayac(){
    const [ counter, setCounter]= useState(0);
    
    return(
    <div>
        <h1>sayac</h1>
        <h1>{counter}</h1>

        {<button onClick={()=>setCounter(counter+1)}>arttır</button>}
        {<button onClick={()=>setCounter(counter-1)}>azalt</button>}

    </div>);

};

export default Sayac;