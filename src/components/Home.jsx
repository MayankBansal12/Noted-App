import React, { useEffect, useState } from "react";
import Note from "./Note";
import CreateArea from "./CreateArea";
import axios from "axios";

function Home() {
  const [notes, setNotes] = useState([]);

  // Get all notes from database and store it in state
  useEffect(()=>{
    axios.get("https://keeper-database.onrender.com/note")
      .then((res)=>{
        setNotes(res.data);
      });
  })

  // Add new note
  function addNote(newNote) {
    axios.post("https://keeper-database.onrender.com/note",newNote);
  }

  // Delete note
  function deleteNote(id) {
    axios.delete("https://keeper-database.onrender.com/note/"+id);
  }

  return (
    <>
      <CreateArea onAdd={addNote} />
      <div className="notes-container">
        {notes.map((noteItem, index) => {
          return (
            <Note
              key={index}
              id={noteItem._id}
              title={noteItem.title}
              content={noteItem.content}
              onDelete={deleteNote}
            />
          );
        })}
      </div>
    </>
  );
}

export default Home;
