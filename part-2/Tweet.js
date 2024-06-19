const Tweet = (props) => (
    <div className="tweet">
        <span>
            <b>{props.name} </b> 
            <small>@{props.username}</small>
        </span>
        
        <p className="message">{props.message}</p>
        <hr/>
        <small>{props.date}</small>
    </div>
)