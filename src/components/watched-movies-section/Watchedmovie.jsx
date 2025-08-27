import Button from "../Button";

function WatchedMovie({ movie }) {
  return (
    <div className="watched-movie">
      <div className="img-container">
        <img src={movie.Poster} alt={movie.title} />
      </div>

      <div className="movie-info">
        <h3 className="movie-name">{movie.title}</h3>
        <div className="watched-movie-stats">
          <p>⭐️ {movie.imdbRating}</p>
          <p>🌟 {movie.userRating}</p>
          <p>⏳ {movie.runtime}</p>
          <Button className={"watched-movie-btn"}>x</Button>
        </div>
      </div>
    </div>
  );
}

export default WatchedMovie;
