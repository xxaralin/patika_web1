import {useEffect} from 'react'
import ChatForm from './ChatForm'
import ChatList from './ChatList'
import { init, initialMessages, receiveMessage } from '../socketApi'
import {useChatContext} from '../context/ChatContext'

function Container() {
  const {setMessages}=useChatContext();
  useEffect(()=>{
    init();

    initialMessages((messages)=>setMessages(messages))
    receiveMessage((message)=>{
      setMessages((prevState)=>[...prevState, {message}])
    });
  },[])
  return (
    <div className='App'>
         <ChatList/>
         <ChatForm/>
    </div>
  )
}

export default Container