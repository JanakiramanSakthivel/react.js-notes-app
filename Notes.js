import React from "react";

let Note = (props)=>{

    const handleClick = () => {
        props.onDelete(props.id)
    }

    return(
        <div className="note">
            <h1>{props.title}</h1>
            <p>{props.content}</p>
            <button onClick={handleClick} id="remove">Remove Note</button>
        </div>
    )
}

export default Note;

