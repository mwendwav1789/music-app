import React, { useState } from "react";

const TrackRating = ({ track }) => {
  const [rating, setRating] = useState(null);

  const handleRating = (newRating) => {
    setRating(newRating);
    console.log(`New Rating for ${track.name}: ${newRating}`); // Log the new rating
    alert(`New Rating for ${track.name}: ${newRating}`); // Alert the new rating
  };

  return (
    <div className="flex flex-col items-center">
      <h3 className="text-xl text-white">{track.name}</h3>
      <div className="flex space-x-2">
        {[1, 2, 3, 4, 5].map((star) => (
          <button
            key={star}
            onClick={() => handleRating(star)}
            className={`text-yellow-500 ${
              rating >= star ? "text-yellow-400" : ""
            }`}
          >
            ★
          </button>
        ))}
      </div>
      {rating && (
        <p className="mt-2 text-gray-300">Your Rating: {rating} stars</p>
      )}
    </div>
  );
};

export default TrackRating;
