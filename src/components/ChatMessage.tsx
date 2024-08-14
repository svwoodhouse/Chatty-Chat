interface ChatMessageProps {
    message: string,
    timeSent: string,
    sentFrom: string,
    currentUser: string
}
const ChatMessage = ({message, timeSent, sentFrom, currentUser}: ChatMessageProps) => {
    return (
        <div className={`${currentUser === sentFrom ? 'sender' : 'reciever'} user-chat-message-container`}>
            <p>{sentFrom}</p>
            <p>{message}</p>
            <p>{timeSent}</p>
        </div>
    )
}

export default ChatMessage;