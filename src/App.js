import React, { useState, useEffect } from "react";
import "./App.css";
import Form from "./components/Form"; // Add Form component
import AdminActions from "./components/AdminActions"; // Add AdminActions component

function App() {
  const [tracks, setTracks] = useState([]);

  // Fetch data from the backend
  useEffect(() => {
    fetch("http://localhost:5000/tracks")
      .then((response) => response.json())
      .then((data) => setTracks(data));
  }, []);

  // Function to handle adding a new track
  const addTrack = (newTrack) => {
    fetch("http://localhost:5000/tracks", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newTrack),
    })
      .then((response) => response.json())
      .then((addedTrack) => {
        setTracks((prev) => [...prev, addedTrack]);
      });
  };

  // Handle deleting a track
  const handleDelete = (id) => {
    fetch(`http://localhost:5000/tracks/${id}`, { method: "DELETE" }).then(
      () => {
        setTracks((prev) => prev.filter((track) => track.id !== id));
      }
    );
  };

  // Handle editing a track
  const handleEdit = (track) => {
    const updatedTrack = { ...track, name: "Updated Track Name" }; // Example update
    fetch(`http://localhost:5000/tracks/${track.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedTrack),
    })
      .then((response) => response.json())
      .then((data) => {
        setTracks((prev) =>
          prev.map((item) => (item.id === data.id ? data : item))
        );
      });
  };

  return (
    <div className="App">
      <h1>Your Music Collection</h1>
      <Form addTrack={addTrack} />
      <ul>
        {tracks.map((track) => (
          <li key={track.id}>
            <h2>{track.name}</h2>
            <p>{track.genre}</p>
            <a href={track.link} target="_blank" rel="noopener noreferrer">
              Listen
            </a>
            <p>Rating: {track.rating}</p>
            <AdminActions
              track={track}
              onDelete={handleDelete}
              onEdit={handleEdit}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
