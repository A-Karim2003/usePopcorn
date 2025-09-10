import { useEffect, useRef } from "react";
import "./header.css";

function Header({ movies, setQuery, query }) {
  const inputEl = useRef();

  useEffect(() => {
    const callback = (e) => e.key === "Enter" && inputEl.current.focus();
    document.addEventListener("keydown", callback);

    return () => document.removeEventListener("keydown", callback);
  }, []);
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
      <div className="results">Found {movies.length} results</div>
    </header>
  );
}

export default Header;
