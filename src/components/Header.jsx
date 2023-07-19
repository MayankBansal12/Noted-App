import React from "react";
import NoteAltIcon from '@mui/icons-material/NoteAlt';

function Header() {
  return (
    <header>
      <div className="text">
        <h1>
          <NoteAltIcon />
          Noted
        </h1>
        <p>Just Note it!</p>
      </div>
      <button>Login</button>
    </header>
  );
}

export default Header;
