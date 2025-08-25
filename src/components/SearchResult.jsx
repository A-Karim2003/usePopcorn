function SearchResult({ movie }) {
  return (
    <div className="search-result">
      <div className="img-container">
        <img src={movie.Poster} alt={movie.title} />
      </div>

      <div className="movie-info">
        <h3 className="movie-name">Inception</h3>
        <p className="movie-release-date">🗓️ 2010</p>
      </div>
    </div>
  );
}

export default SearchResult;
