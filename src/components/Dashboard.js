// Dashboard.js
import React, { useState, useEffect } from "react";
import { fetchData } from "../utils/api"; // Import the fetchData function

const Dashboard = () => {
  const [tracks, setTracks] = useState([]); // State for storing fetched tracks

  const fetchData = async () => {
    try {
      const response = await fetch("http://localhost:5000/tracks");
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      console.log(data); // This should log the tracks data
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <div className="min-h-screen p-6 bg-gray-900 text-gray-200">
      <h2 className="text-3xl font-bold text-center mb-6 text-white">
        Your Music Collection
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {tracks.map((track) => (
          <div
            key={track.id}
            className="bg-gray-800 p-4 rounded-lg shadow-md flex flex-col justify-between"
          >
            <h3 className="text-xl font-semibold text-white mb-2">
              {track.name}
            </h3>
            <p className="text-gray-400">Genre: {track.genre}</p>
            <p className="text-gray-400">Length: {track.length} seconds</p>
            <a
              href={track.link}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-block px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-center rounded-lg transition duration-200"
            >
              Play Music
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
