import React, { useMemo, useState, useCallback } from 'react'
import "./App.css"
import Header from './components/Header';

function App() {
    const [number, setNumber]=useState(0);

    const increase=useCallback(() => {
      setNumber((prevState)=>prevState+1);
    },[]);
    
   // const data={name:"nilo"}
   const data = useMemo(()=>{
    return {name:"nilo", number};
   },[number]);//dependency arraye gönderdiğin veri değiştiğinde rerender edilir
 
 
   return (
    <div className='App'>
        {/* <Header number={number} data={data} increase={increase}/> */}
        <Header increase={increase}/>
        <h1>{number}</h1>
       
          
    </div>
  )
}

export default App;