import CircleIcon from '@mui/icons-material/Circle';

const FriendCard = () => {
    return (
        <div className="friend-card-container">
            <CircleIcon color="success" className='online-status'/>
            <p>Friend Name</p>
        </div>
    )
}

export default FriendCard;