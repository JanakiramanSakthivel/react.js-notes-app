import React, { useState } from "react";
import "../App.css";

let CreateNote = (props) =>{

    const [note, setNote,] = useState({
        title:'',
        content : '',
    })

    const handleChange = (event) => {
const {name, value} = event.target
setNote({
    ...note,
    [name] : value
})
    }

    const submitNote = (e)=>{
        e.preventDefault()
        props.onAdd(note)
        setNote({
            title:'',
            content : '',
        })
    }

    return(
        <div>
            <form>
                <input name="title" value={note.title} onChange={handleChange} placeholder="Enter Title Here..." id='title'></input>
                <textarea name="content" value={note.content} onChange={handleChange} placeholder="Enter Content Here..." id="content"></textarea>
                <button onClick={submitNote} id="add">Save Your Note</button>
            </form>
        </div>
    )
}

export default CreateNote; 