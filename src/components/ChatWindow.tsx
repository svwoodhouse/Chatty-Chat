import { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";
import SendChat from "./SendChat";
import { TextMessage } from "../types";

const ChatWindow = () => {
  const [messages, setMessages] = useState<TextMessage[]>([])
  const [socket, setSocket] = useState<WebSocket | null>(null)
  const [user, setUser] = useState('')

  useEffect(() => {
    setUser(() => 'Client '+ Math.floor(Math.random() * 10))
    const socket = new WebSocket('ws://localhost:8080')

    socket.onopen = () => {
      console.log('Websocket is connected')
      socket.send(JSON.stringify({
        username: user
      }))
    }

    socket.onmessage = (evt) => {
      const message = JSON.parse(evt.data)
      console.log(JSON.parse(evt.data))
      setMessages((prevMessages) => [...prevMessages, message])
    }

    socket.onclose = () => {
      console.log('Websocket is closed')
    }

    setSocket(socket);

    return () => {
      socket.close()
    }
  },[user])

  const sendMessage = (text: string) => {
    const data: TextMessage = {
      message: text,
      timeSent: new Date().toUTCString(),
      sentFrom: user,
    }

    if(socket) {
      socket.send(JSON.stringify(data))
      setMessages((prevMessages)=> [...prevMessages, data])
    }
  }

    return (
        <div className="chat-window-container">
            <div className="chats">
                {
                  messages.map((message) => {
                    return (
                      <ChatMessage {...message} currentUser={user}/>
                    )
                  })
                }
            </div>
            <SendChat onSend={sendMessage}/>
        </div>
    )
}

export default ChatWindow;