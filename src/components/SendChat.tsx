import { useState } from "react";

const SendChat = () => {
    const [chatText, setChatText] = useState('');
    return (
        <div className="send-chat-container">
            <form>
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