// import { useState } from 'react'
import Sidebar from './components/Sidebar'
import Main from './components/Main'
import './App.css'
import { useEffect, useState } from 'react';
import uuid from "react-uuid";

function App() {
const [notes,setNotes] = useState(JSON.parse (localStorage.getItem("notes")) || []);
const [activeNote,setActiveNote] = useState(false);

useEffect(() => {
  localStorage.setItem("notes", JSON.stringify(notes));
},[notes]);

useEffect(() => {
  setActiveNote(notes[0].id);
},[]);


const onAddNote  = () =>{
  console.log("新しく追加")
  const newNote = {
    id:uuid(),
    title:"新しいノート",
    content:"新しいノートの内容",
    modDate: Date.now(),
  }
  setNotes([...notes, newNote]);

  console.log(notes);
};
const onDeleteNote = (id) => {
  const filterNotes = notes.filter((note) => note.id !== id );
  setNotes(filterNotes);
} 
const getActiveNote = () =>{
  return notes.find((note) => note.id === activeNote)
}
const onUpdateNote = (updatedNote) =>{
  const updatedNotesArray = notes.map((note) => {
    if(note.id === updatedNote.id){
      return updatedNote;
    }else{
      return note;
    }
  });

  setNotes(updatedNotesArray);
}

  return(
    <div className="App">
      <Sidebar onAddNote={onAddNote} onDeleteNote={onDeleteNote} notes={notes} activeNote={activeNote} setActiveNote={setActiveNote}/>
      <Main activeNote={getActiveNote()} onUpdateNote={onUpdateNote}/>
    </div>
  )
}

export default App
