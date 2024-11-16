import React, { useState } from "react";

const Form = ({ addTrack }) => {
  const [trackData, setTrackData] = useState({
    name: "",
    artist: "",
    link: "",
  });

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Add the track locally first
    addTrack(trackData);

    // Reset form after submission
    setTrackData({ name: "", artist: "", link: "" });
  };

  return (
    <form onSubmit={handleSubmit} className="form p-4 bg-gray-700 rounded">
      <input
        type="text"
        placeholder="Track Name"
        value={trackData.name}
        onChange={(e) => setTrackData({ ...trackData, name: e.target.value })}
        className="input w-full mb-2 p-2"
      />
      <input
        type="text"
        placeholder="Artist"
        value={trackData.artist}
        onChange={(e) => setTrackData({ ...trackData, artist: e.target.value })}
        className="input w-full mb-2 p-2"
      />
      <input
        type="text"
        placeholder="Track Link"
        value={trackData.link}
        onChange={(e) => setTrackData({ ...trackData, link: e.target.value })}
        className="input w-full mb-2 p-2"
      />
      <button type="submit" className="btn bg-green-500 text-white p-2 rounded">
        Add Track
      </button>
    </form>
  );
};

export default Form;
