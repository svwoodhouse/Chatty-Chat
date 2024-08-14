import { useState } from "react";

interface SendChatProps {
    onSend: (chatText : string) => void
}

const SendChat = ({onSend}: SendChatProps) => {
    const [chatText, setChatText] = useState('');

    const sendMessage = (e: React.FormEvent<HTMLFormElement> ) => {
        e.preventDefault()
        onSend(chatText)
        setChatText("")
    }

    return (
        <div className="send-chat-container">
            <form onSubmit={(e) => sendMessage(e)}>
            <input
                type="text"
                value={chatText}
                onChange={(e)=> setChatText(e.target.value)}
                placeholder="Text..."
            />
            <input type="submit" value="Submit"/>
            </form>
        </div>
    )
}

export default SendChat;