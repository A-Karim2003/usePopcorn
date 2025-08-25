import Button from "../Button";

function WatchedMovies() {
  return (
    <div className="watched-movie">
      <div className="img-container">
        <img
          src={
            "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg"
          }
          alt={"movie.title"}
        />
      </div>

      <div className="movie-info">
        <h3 className="movie-name">Inception</h3>
        <div className="watched-movie-stats">
          <p>⭐️ 8.05</p>
          <p>🌟 9.75</p>
          <p>⏳ 106.5 min</p>
          <Button className={"watched-movie-btn"}>x</Button>
        </div>
      </div>
    </div>
  );
}

export default WatchedMovies;
