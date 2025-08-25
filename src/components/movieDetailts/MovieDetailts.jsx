function MovieDetailts() {
  return (
    <div className="movie-details-container">
      <div className="img-container">
        <img
          src={
            "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg"
          }
          alt={""}
        />
      </div>

      <div className="movie-details">
        <h3 className="movie-name">Inception</h3>
        <div className="movie-detail-stats">
          <p>16 Jul 2010 • 148 min</p>
          <p>Action, Adventure, Sci-Fi</p>
          <p>⭐️ 8.8 IMDb rating</p>
        </div>
      </div>
    </div>
  );
}

export default MovieDetailts;
