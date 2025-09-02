import { useState } from "react";
import "./header.css";

function Header({ movies, setQuery }) {
  return (
    <header>
      <h1 className="logo">🍿 usePopcorn</h1>
      <div className="search">
        <input type="text" onChange={(e) => setQuery(e.target.value.trim())} />
      </div>
      =<div className="results">Found {movies.length} results</div>
    </header>
  );
}

export default Header;
