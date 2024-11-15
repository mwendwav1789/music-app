import React, { useState } from "react";

const MusicForm = ({ addTrack }) => {
  const [trackData, setTrackData] = useState({
    name: "",
    genre: "",
    length: "",
    link: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTrackData({
      ...trackData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (typeof addTrack === "function") {
      // Check that addTrack is a function
      addTrack(trackData);
    } else {
      console.error("addTrack is not a function");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <input
          type="text"
          name="name"
          placeholder="Track Name"
          value={trackData.name}
          onChange={handleChange}
        />
      </div>
      <div>
        <select name="genre" value={trackData.genre} onChange={handleChange}>
          <option value="">Select Genre</option>
          <option value="Pop">Pop</option>
          <option value="Rock">Rock</option>
          <option value="Jazz">Jazz</option>
          <option value="Classical">Classical</option>
        </select>
      </div>
      <div>
        <input
          type="number"
          name="length"
          placeholder="Track Length"
          value={trackData.length}
          onChange={handleChange}
        />
      </div>
      <div>
        <input
          type="url"
          name="link"
          placeholder="Music Link"
          value={trackData.link}
          onChange={handleChange}
        />
      </div>
      <button type="submit">Add Track</button>
    </form>
  );
};

export default MusicForm;
