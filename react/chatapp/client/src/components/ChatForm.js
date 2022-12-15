import {useState} from 'react'
import styles from "./styles.module.css"
import { sendMessage } from '../socketApi'
import { useChatContext } from '../context/ChatContext'

function ChatForm() {
    const [message,setMessage]=useState("")
    
    const {messages, setMessages} = useChatContext();
    
    const handleSubmit=((e)=>{
        e.preventDefault();
        console.log(message)
        setMessages([...messages,{message, fromMe: true}])
        sendMessage(message)
        setMessage("")
    })


    
  return (
    <div>
        <form onSubmit={handleSubmit}>
        <input className={styles.textInput} 
        value={message}
        onChange={(e)=>setMessage(e.target.value)}>

        </input>

        </form>
    </div>
  )
}

export default ChatForm