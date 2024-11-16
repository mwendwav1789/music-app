// src/components/TrackCard.js
import React from "react";
import TrackRating from "./TrackRating"; // Ensure the path is correct

function TrackCard({ track }) {
  return (
    <div className="track-card border border-gray-500 rounded-lg p-4 mb-4 shadow-md bg-gray-800">
      <h3 className="text-2xl text-white">{track.name}</h3>
      <p className="text-lg text-gray-300">{track.genre}</p>
      <a
        href={track.link}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-400"
      >
        Play Music
      </a>
      <TrackRating track={track} />
    </div>
  );
}

export default TrackCard;
