import { Star } from "lucide-react";

function SelectRatings() {
  return (
    <div className="ratings-container">
      {/* Outline star */}
      <Star size={32} color="#f5c518" />
      {/* Filled star */}
      <Star size={32} color="#f5c518" fill="#f5c518" />
    </div>
  );
}

export default SelectRatings;
