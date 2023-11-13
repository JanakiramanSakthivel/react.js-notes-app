import logo from './logo.svg';
import './App.css';
import CreateNote from './components/Createnotes';
import Note from './components/Notes';
import React from 'react';


function App() {

  const [notes, setNote] = React.useState([])

  const addNote = (newNote)=>{
setNote([...notes, newNote])
  }

  const deletedNote = (id) => {
setNote (notes.filter((note, index) => index !== id))

  }

  console.log(notes);

  return (
    <div className="App">
      <CreateNote onAdd={addNote}></CreateNote>
      {notes.map((note, index)=> <Note onDelete={deletedNote} id={index} title={note.title} content= {note.content}/>)}
      <Note></Note>
    </div>
  );
}

export default App;
