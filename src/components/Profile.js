// src/components/Profile.js
import React, { useState, useEffect } from "react";

const Profile = () => {
  // State to store the profile data
  const [profile, setProfile] = useState({
    name: "",
    email: "",
    bio: "",
  });

  // State to handle loading state while data is being fetched
  const [isLoading, setIsLoading] = useState(true);

  // Fetch the profile data when the component mounts
  useEffect(() => {
    // Assuming there's an API endpoint for fetching the profile (e.g., users)
    fetch("http://localhost:5000/users/1") // Assuming the user with ID 1 is being fetched
      .then((response) => response.json())
      .then((data) => {
        setProfile(data); // Set profile data in the state
        setIsLoading(false); // Stop the loading state
      })
      .catch((error) => {
        console.error("Error fetching profile data:", error);
        setIsLoading(false);
      });
  }, []);

  // Handle form input changes to update state
  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile((prevProfile) => ({
      ...prevProfile,
      [name]: value,
    }));
  };

  // Handle form submission to update profile
  const handleSubmit = (e) => {
    e.preventDefault();

    // Send updated profile data to the server
    fetch("http://localhost:5000/users/1", {
      method: "PUT", // Use PUT to update the existing resource
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(profile),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Profile updated:", data);
        alert("Profile updated successfully!");
      })
      .catch((error) => {
        console.error("Error updating profile:", error);
        alert("Failed to update profile.");
      });
  };

  // Show loading message if data is still being fetched
  if (isLoading) {
    return <div>Loading profile...</div>;
  }

  return (
    <div className="profile bg-gray-800 text-white p-6 rounded-lg shadow-md">
      <h3 className="text-2xl font-semibold mb-4">Edit Your Profile</h3>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={profile.name}
            onChange={handleChange}
            className="input w-full p-2 mt-2 bg-gray-700 rounded"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={profile.email}
            onChange={handleChange}
            className="input w-full p-2 mt-2 bg-gray-700 rounded"
          />
        </div>

        <div>
          <label htmlFor="bio" className="block text-sm font-medium">
            Bio
          </label>
          <textarea
            id="bio"
            name="bio"
            value={profile.bio}
            onChange={handleChange}
            className="input w-full p-2 mt-2 bg-gray-700 rounded"
            rows="4"
          />
        </div>

        <button
          type="submit"
          className="btn bg-blue-500 text-white p-2 rounded mt-4"
        >
          Save Changes
        </button>
      </form>
    </div>
  );
};

export default Profile;
