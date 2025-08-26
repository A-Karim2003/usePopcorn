import { useState } from "react";
import "./header.css";

function Header({ movies }) {
  const [query, setQuery] = useState("");
  return (
    <header>
      <h1 className="logo">🍿 usePopcorn</h1>
      <div className="search">
        <input type="text" />
      </div>
      <div className="results">Found {movies.length} results</div>
    </header>
  );
}

export default Header;
