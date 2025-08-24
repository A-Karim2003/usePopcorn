import "./header.css";

function Header() {
  return (
    <header>
      <h1 className="logo">🍿 usePopcorn</h1>
      <div className="search">
        <input type="text" />
      </div>
      <div className="results">Found 0 results</div>
    </header>
  );
}

export default Header;
