import ChatMessage from "./ChatMessage";
import SendChat from "./SendChat";

const ChatWindow = () => {
    return (
        <div className="chat-window-container">
            <div className="chats">
                <ChatMessage />
                <ChatMessage />
            </div>
            <SendChat/>
        </div>
    )
}

export default ChatWindow;