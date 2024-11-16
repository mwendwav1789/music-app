// src/components/TrackRating.js
import React, { useState } from "react";

const TrackRating = ({ track }) => {
  const [rating, setRating] = useState(0);

  const handleRatingChange = (newRating) => {
    setRating(newRating);
  };

  return (
    <div>
      <h4>Rate: {track.name}</h4>
      <div>
        {[1, 2, 3, 4, 5].map((star) => (
          <button
            key={star}
            onClick={() => handleRatingChange(star)}
            className={star <= rating ? "text-yellow-400" : "text-gray-400"}
          >
            {star <= rating ? "★" : "☆"}
          </button>
        ))}
      </div>
    </div>
  );
};

export default TrackRating;
