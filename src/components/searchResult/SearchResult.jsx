function SearchResult({ movie, setSelectedID }) {
  return (
    <div className="search-result" onClick={() => setSelectedID(movie.imdbID)}>
      <div className="img-container">
        <img
          src={movie.Poster}
          alt={movie.Title}
          onError={(e) => (e.target.src = "/public/887808-200.png")}
        />
      </div>

      <div className="movie-info">
        <h3 className="movie-name">{movie.Title}</h3>
        <p className="movie-release-date">🗓️ {movie.Year}</p>
      </div>
    </div>
  );
}

export default SearchResult;

//! set default image on error.
