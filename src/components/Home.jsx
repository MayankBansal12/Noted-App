import React, { useEffect, useState } from "react";
import Note from "./Note";
import CreateArea from "./CreateArea";
import { Navigate } from "react-router-dom";
import fetchapi from "../utils/fetchapi";

function Home() {
  const [notes, setNotes] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const token = localStorage.getItem("token");
  const userId = localStorage.getItem("userId");

  // Check if the user is logged in on component mount
  useEffect(() => {
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
  }, [notes]); // Empty dependency array ensures the effect runs only once on component mount

  // Add new note
  function addNote(newNote) {
    fetchapi.post(`${process.env.REACT_APP_SERVER_URL}/note`, newNote);
  }

  // Delete note
  function deleteNote(id) {
    fetchapi.delete(`${process.env.REACT_APP_SERVER_URL}/note/` + id);
  }

  // If the user is not logged in, redirect to the login page
  if (!isLoggedIn) {
    return <Navigate to="/login" />;
  }

  return (
    <>
      <CreateArea onAdd={addNote} userId={userId} />
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
