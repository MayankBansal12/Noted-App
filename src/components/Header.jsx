import React from "react";
import NoteAltIcon from '@mui/icons-material/NoteAlt';
import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <h1><NoteAltIcon /> Noted</h1>
      <Link to="/logout">Logout</Link>
    </header>
  );
}

export default Header;
