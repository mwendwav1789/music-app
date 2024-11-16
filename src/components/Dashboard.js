import React from "react";
import TrackCard from "./TrackCard"; // Import TrackCard

function Dashboard({ tracks }) {
  return (
    <div className="dashboard">
      <h2>Your Music Collection</h2>
      <div className="tracks-list">
        {tracks.map((track) => (
          <TrackCard key={track.id} track={track} />
        ))}
      </div>
    </div>
  );
}

export default Dashboard;
