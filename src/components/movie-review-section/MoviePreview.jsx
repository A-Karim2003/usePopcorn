import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

import Button from "../Button";

function MoviePreview({ selectedMovie, setSelectedMovie }) {
  return (
    <div className="movie-details-container">
      <div className="img-container">
        <img src={selectedMovie.Poster} alt={selectedMovie.Title} />
      </div>

      <div className="movie-details">
        <h3 className="movie-name">{selectedMovie.Title}</h3>
        <div className="movie-detail-stats">
          <p>
            {selectedMovie.Released} • {selectedMovie.Runtime}
          </p>
          <p>{selectedMovie.Genre}</p>
          <p>⭐️ {selectedMovie.imdbRating} IMDb rating</p>
        </div>
      </div>

      <Button className={"back-btn"} onClick={() => setSelectedMovie(null)}>
        <FontAwesomeIcon icon={faArrowLeft} />
      </Button>
    </div>
  );
}

export default MoviePreview;
