// src/components/MusicFilter.js
import React, { useState } from "react";

const MusicFilter = ({ filterData }) => {
  const [filter, setFilter] = useState({ genre: "", date: "", length: "" });

  const handleChange = (e) => {
    setFilter({ ...filter, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    filterData(filter); // Pass filter data to parent
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="filter-form p-4 bg-gray-700 rounded"
    >
      <input
        type="text"
        name="genre"
        placeholder="Filter by Genre"
        value={filter.genre}
        onChange={handleChange}
        className="input w-full mb-2 p-2"
      />
      <input
        type="text"
        name="date"
        placeholder="Filter by Date"
        value={filter.date}
        onChange={handleChange}
        className="input w-full mb-2 p-2"
      />
      <input
        type="text"
        name="length"
        placeholder="Filter by Length"
        value={filter.length}
        onChange={handleChange}
        className="input w-full mb-2 p-2"
      />
      <button type="submit" className="btn bg-blue-500 text-white p-2 rounded">
        Apply Filters
      </button>
    </form>
  );
};

export default MusicFilter;
