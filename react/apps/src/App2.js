import {useEffect, useState} from "react"
import Sayac from "./components/sayac.js";
import StateInput2 from "./components/stateInput.js";
import './App.css';

function App() {
  // const [name, setName]=useState("nilo");
  // const [age, setAge]=useState(23);
  // const [hobbies, setHobby]=useState([
  //   {
  //     name:"watchingTV",
  //     degree:9,
  //   },
  //   {
  //     name:"reading",
  //     degree:8,
  //   },
  //   {
  //     name:"tiktok",
  //     degree:10,
  //   },
  //   {
  //     name:"working",
  //     degree:3,
  //   },
  //   {
  //     name:"eating",
  //     degree:7,
  //   },
  // ])
  
  // return (
  //   <div>
  //     <h1>merhaba {name}</h1>
  //     <button onClick={()=> name=="nilo"?setName("lara"): setName("nilo")}>change name</button>

  //     <h1>your age until sept 23 {`=>`} {age}</h1>
  //     <button onClick={()=> setAge(age+1)}>it sept 23</button>
        
  //     <h1>Hobbies</h1>

  //     {hobbies.map((hobby,index)=>(
  //       <div key={index}>{hobby.name}</div>
  //     ))}

  //     <button onClick={()=> setHobby([...hobbies, {name:"drawing", degree:8}])}>add</button>
        

  //     <div>
  //       <Sayac/>
  //     </div>

  //     <div>
  //       <StateInput2/>
  //     </div>
    
    
    
  //   </div>


    
  // );


  //lifecycles

  const [number, setNumber]=useState(0);
  const [name, setName]=useState("Nilo");

  useEffect(()=>{
    console.log("number state güncellendi");
    
  },[number])

  useEffect(()=>{
    console.log("name state güncellendi");
    
  },[name])

  return(
    <div>
      <h1>{number}</h1>
      <button onClick={()=>setNumber(number+1)}>Click to increase</button>


      <h1>{name}</h1>
      <button onClick={()=>setName("Lara")}>Click to change</button>
      
    </div>
  );
}



export default App;
