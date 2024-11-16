import React from "react";
import TrackCard from "./TrackCard"; // Assuming you have a TrackCard component

const Dashboard = ({ tracks }) => {
  return (
    <div className="dashboard">
      <h3 className="text-3xl text-white mb-6">Your Music Collection</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {tracks.map((track) => (
          <TrackCard key={track.id} track={track} />
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
