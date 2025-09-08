import Button from "../Button";

function WatchedMovie({ movie, removeMovie }) {
  return (
    <div className="watched-movie">
      <div className="img-container">
        <img src={movie.poster} alt={movie.title} />
      </div>

      <div className="movie-info">
        <h3 className="movie-name">{movie.title}</h3>
        <div className="watched-movie-stats">
          <p>⭐️ {movie.userRating}</p>
          <p>🌟 {movie.imdbRating}</p>
          <p>⏳ {movie.runtime}</p>
          <Button
            className={"watched-movie-btn"}
            onClick={() => removeMovie(movie.imdbID)}
          >
            x
          </Button>
        </div>
      </div>
    </div>
  );
}

export default WatchedMovie;
