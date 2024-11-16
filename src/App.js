// src/App.js
import React, { useState } from "react";
import "./App.css"; // Import any global CSS
import "animate.css";
import LandingPage from "./components/LandingPage";
import Dashboard from "./components/Dashboard";
import Profile from "./components/Profile";
import Form from "./components/Form";
import TrackRating from "./components/TrackRating"; // Corrected path
import MusicFilter from "./components/MusicFilter";

function App() {
  console.log("App component rendered"); // Track how often App is rendered

  const [tracks, setTracks] = useState([]);
  const [filter, setFilter] = useState({});

  // Handle filter data (from MusicFilter component)
  const handleFilterData = (data) => {
    setFilter((prev) => ({
      ...prev,
      ...data,
    }));
    console.log("Current filter data:", filter); // It's okay to log here for debugging, but useEffect will give you better control
  };

  // Add a new track (from Form component)
  const addTrack = (trackData) => {
    const newTrack = { ...trackData, id: Date.now() };
    setTracks((prevTracks) => [...prevTracks, newTrack]);
    console.log("Track added:", newTrack);
  };

  return (
    <div className="App bg-gray-900 text-gray-100 min-h-screen flex flex-col items-center">
      <header className="App-header text-center py-8 w-full">
        <h1 className="text-4xl font-extrabold text-white">
          Welcome to the Music App
        </h1>
        <p className="mt-2 text-lg text-gray-300">
          Explore, discover, and manage your favorite tracks!
        </p>
      </header>

      <main className="py-12 px-4 md:px-12 w-full max-w-6xl mx-auto flex flex-col gap-12">
        {/* Landing Page */}
        <section>
          <LandingPage />
        </section>

        {/* Dashboard */}
        <section>
          <Dashboard tracks={tracks} />
        </section>

        {/* Profile */}
        <section>
          <Profile />
        </section>

        {/* Add Track Form */}
        <section>
          <Form addTrack={addTrack} />
        </section>

        {/* Music Filter */}
        <section>
          <MusicFilter filterData={handleFilterData} />
        </section>
      </main>
    </div>
  );
}

export default App;
