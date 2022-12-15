import React from 'react'
import styles from "./styles.module.css"
import { useChatContext } from '../context/ChatContext'
import ChatItem from './ChatItem';
import ScrollableFeed from 'react-scrollable-feed'

function ChatList() {
    const {messages}=useChatContext();
    
  return (
    <div className={styles.chatlist}>
      <ScrollableFeed>
      
        {messages.map((item, key)=>(
       <ChatItem key={key} item={item}/>
    ))}
    
        
    </ScrollableFeed>
    </div>
  )
}

export default ChatList