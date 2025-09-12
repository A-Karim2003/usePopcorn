import { useEffect, useRef } from "react";
import "./header.css";
import { useKey } from "../../hooks/useKey";

function Header({ numOfMovies, setQuery, query }) {
  const inputEl = useRef();

  // useEffect(() => {
  //   const callback = (e) => e.key === "Enter" && inputEl.current.focus();
  //   document.addEventListener("keydown", callback);

  //   return () => document.removeEventListener("keydown", callback);
  // }, []);

  useKey("keydown", "Enter", (e) => {
    e.key === "Enter" && inputEl.current.focus();
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
