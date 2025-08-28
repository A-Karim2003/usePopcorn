import { Star } from "lucide-react";
import { useState } from "react";

function SelectRatings() {
  const [hoverValue, setHoverValue] = useState("");
  const [rating, setrating] = useState("");

  const displayValue = hoverValue || rating;

  return (
    <div className="ratings-container">
      <div className="rating">
        {Array.from({ length: 10 }).map((_, i) => (
          <span
            className="star-container"
            onMouseEnter={() => setHoverValue(i + 1)}
            onMouseLeave={() => setHoverValue(null)}
            onClick={() => setrating(i + 1)}
          >
            <Star
              key={i}
              className="star"
              size={26}
              rating
              color="#f5c518"
              fill={i < displayValue ? "#f5c518" : "none"}
            />
          </span>
        ))}
      </div>

      <p>{hoverValue || rating}</p>
    </div>
  );
}

export default SelectRatings;
