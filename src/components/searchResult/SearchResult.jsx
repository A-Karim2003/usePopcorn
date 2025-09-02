function SearchResult({ movie }) {
  return (
    <div className="search-result">
      <div className="img-container">
        <img src={movie.Poster} alt={movie.Title} />
      </div>

      <div className="movie-info">
        <h3 className="movie-name">{movie.Title}</h3>
        <p className="movie-release-date">🗓️ {movie.Year}</p>
      </div>
    </div>
  );
}

export default SearchResult;
