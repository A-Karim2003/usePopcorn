import "./header.css";

function Header({ movies, setQuery, query }) {
  return (
    <header>
      <h1 className="logo">🍿 usePopcorn</h1>
      <div className="search">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>
      <div className="results">Found {movies.length} results</div>
    </header>
  );
}

export default Header;
