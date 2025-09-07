import { Star } from "lucide-react";
import { useState } from "react";

function SelectRatings({ selectedMovie, setWatched }) {
  const [hoverValue, setHoverValue] = useState("");
  const [rating, setrating] = useState("");

  const displayValue = hoverValue || rating;

  function handleAddToList() {
    const movieInfo = {
      imdbID: selectedMovie.imdbID,
      title: selectedMovie.Title,
      poster: selectedMovie.Poster,
      imdbRating: selectedMovie.imdbRating,
      userRating: rating,
      runtime: selectedMovie.Runtime,
    };

    setWatched((prevWatched) => [...prevWatched, movieInfo]);
  }

  return (
    <div className="ratings-section">
      <div className="ratings-container">
        <div className="rating">
          {Array.from({ length: 10 }).map((_, i) => (
            <span
              className="star-container"
              onMouseEnter={() => setHoverValue(i + 1)}
              onMouseLeave={() => setHoverValue(null)}
              onClick={() => setrating(i + 1)}
              key={i}
            >
              <Star
                className="star"
                size={26}
                color="#f5c518"
                fill={i < displayValue ? "#f5c518" : "none"}
              />
            </span>
          ))}
        </div>

        <p>{hoverValue || rating}</p>
      </div>

      {rating && <button onClick={handleAddToList}>+ Add to list</button>}
    </div>
  );
}

export default SelectRatings;
