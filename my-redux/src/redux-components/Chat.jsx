import React from 'react'
import { useSelector } from 'react-redux'
import MessageInput from './MessageInput'
import MessageView from './MessageView'

export default function Chat() {

    const message = useSelector(state => state.messages);


  return (
    <section className="chat">
        <h2>CHAT XPTO</h2>
        <article className='message-view'>
            <MessageView messages={message}/>
        </article>
        <article className='message-input'>
            <MessageInput />
        </article>
    </section>
  )
}
