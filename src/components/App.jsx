import React, { useEffect, useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";
import axios from "axios";

function App() {
  const [notes, setNotes] = useState([]);

  useEffect(()=>{
    axios.get("http://localhost:8000/note")
      .then((res)=>{
        setNotes(res.data);
      });
  })

  function addNote(newNote) {
    axios.post("http://localhost:8000/note",newNote);
  }

  function deleteNote(id) {
    axios.delete("http://localhost:8000/note/"+id);
  }

  return (
    <div>
      <Header />
      <CreateArea onAdd={addNote} />
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
      <Footer />
    </div>
  );
}

export default App;
