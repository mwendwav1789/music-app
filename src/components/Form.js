import React, { useState } from "react";

const Form = ({ addTrack }) => {
  console.log("Form component rendered"); // Log to track how many times it mounts
  const [trackData, setTrackData] = useState({
    name: "",
    artist: "",
    genre: "",
    length: "",
  });

  const handleChange = (e) => {
    setTrackData({
      ...trackData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (addTrack) {
      addTrack(trackData);
      setTrackData({ name: "", artist: "", genre: "", length: "" });
    } else {
      console.error("addTrack function is not available in props.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="form-container">
      <input
        type="text"
        name="name"
        placeholder="Track Name"
        value={trackData.name}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="artist"
        placeholder="Artist"
        value={trackData.artist}
        onChange={handleChange}
        required
      />
      <select
        name="genre"
        value={trackData.genre}
        onChange={handleChange}
        required
      >
        <option value="">Select Genre</option>
        <option value="Pop">Pop</option>
        <option value="Rock">Rock</option>
        <option value="Jazz">Jazz</option>
        <option value="Classical">Classical</option>
        <option value="Hip-Hop">Hip-Hop</option>
        <option value="R&B">R&B</option>
        <option value="Country">Country</option>
        <option value="Electronic">Electronic</option>
        <option value="Reggae">Reggae</option>
        <option value="Blues">Blues</option>
        <option value="Metal">Metal</option>
        <option value="Indie">Indie</option>
        <option value="Punk">Punk</option>
        <option value="Folk">Folk</option>
        <option value="Soul">Soul</option>
        <option value="Disco">Disco</option>
        <option value="Techno">Techno</option>
        <option value="House">House</option>
        <option value="Trance">Trance</option>
        <option value="Latin">Latin</option>
      </select>
      <input
        type="number"
        name="length"
        placeholder="Length (minutes)"
        value={trackData.length}
        onChange={handleChange}
        required
      />
      <button type="submit">Add Track</button>
    </form>
  );
};

export default Form;

