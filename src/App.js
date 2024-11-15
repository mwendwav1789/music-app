import React, { useState } from "react";
import "./App.css";
import LandingPage from "./components/LandingPage";
import Dashboard from "./components/Dashboard";
import Profile from "./components/Profile";
import Form from "./components/Form";
import MusicFilter from "./components/MusicFilter";

function App() {
  console.log("App component rendered");  // Track how often App is rendered

  const [tracks, setTracks] = useState([]);
  const [filter, setFilter] = useState({});

  const handleFilterData = (data) => {
    setFilter((prev) => ({
      ...prev,
      ...data,
    }));
    console.log("Current filter data:", filter);
  };

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
        <section>
          <LandingPage />
        </section>
        <section>
          <Dashboard />
        </section>
        <section>
          <Profile />
        </section>
        <section>
          <Form addTrack={addTrack} />
        </section>
        <section>
          <MusicFilter filterData={handleFilterData} />
        </section>
      </main>
    </div>
  );
}

export default App;
