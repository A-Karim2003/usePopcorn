import { useEffect } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

import Button from "../Button";

function MoviePreview({ selectedMovie, setSelectedMovie }) {
  useEffect(() => {
    if (!selectedMovie) return;

    function callBack(e) {
      if (e.key !== "Escape") return;
      setSelectedMovie(null);
    }

    document.addEventListener("keydown", callBack);

    return () => document.removeEventListener("keydown", callBack);
  }, [selectedMovie]);

  return (
    <div className="movie-details-container">
      <div className="img-container">
        <img
          src={selectedMovie.Poster}
          alt={selectedMovie.Title}
          onError={(e) => (e.target.src = "/public/887808-200.png")}
        />
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
