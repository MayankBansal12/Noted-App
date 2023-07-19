import React from "react";
import NoteAltIcon from '@mui/icons-material/NoteAlt';

function Header() {
  return (
    <header>
        <h1>
          <NoteAltIcon />
          Noted
        </h1>
      <button>Login</button>
    </header>
  );
}

export default Header;
