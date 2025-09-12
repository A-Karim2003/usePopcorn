import { useEffect, useRef } from "react";
import "./header.css";
import { useKey } from "../../hooks/useKey";

function Header({ numOfMovies, setQuery, query }) {
  const inputEl = useRef();

  useKey("keydown", "Enter", () => {
    inputEl.current.focus();
  });

  return (
    <header>
      <h1 className="logo" onClick={() => window.location.reload()}>
        🍿 usePopcorn
      </h1>
      <div className="search">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          autoFocus={true}
          ref={inputEl}
        />
      </div>
      <div className="results">Found {numOfMovies} results</div>
    </header>
  );
}

export default Header;
