import React, { useEffect, useState } from "react";
import Note from "./Note";
import CreateArea from "./CreateArea";
import axios from "axios";
import { Navigate } from "react-router-dom";
import fetchapi from "../utils/fetchapi";

function Home() {
  const [notes, setNotes] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(true); // Set the initial value to true

  // Check if the user is logged in on component mount
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      // If the token doesn't exist, the user is not logged in, set isLoggedIn to false
      setIsLoggedIn(false);
    } else {
      // If the token exists, the user is logged in, set isLoggedIn to true
      setIsLoggedIn(true);

      // Get all notes from the database and store them in state
      fetchapi.get("/note").then((res) => {
        setNotes(res.data);
      })
      .catch((error) => {
        console.error("Error fetching notes:", error);
      });
    }
  }, []); // Empty dependency array ensures the effect runs only once on component mount

  // Add new note
  function addNote(newNote) {
    fetchapi.post(`http://localhost:8000/note`, newNote);
  }

  // Delete note
  function deleteNote(id) {
    fetchapi.delete("http://localhost:8000/note/" + id);
  }

  // If the user is not logged in, redirect to the login page
  if (!isLoggedIn) {
    return <Navigate to="/login" />;
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
