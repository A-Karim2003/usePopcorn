import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

import Button from "../Button";

function MoviePreview({ setToggleBackbtn }) {
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

      <Button className={"back-btn"} onClick={() => setToggleBackbtn(true)}>
        <FontAwesomeIcon icon={faArrowLeft} />
      </Button>
    </div>
  );
}

export default MoviePreview;
