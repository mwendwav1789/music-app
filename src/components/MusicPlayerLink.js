
import React from "react";

const MusicPlayerLink = ({ link }) => {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="text-indigo-600 hover:text-indigo-800 focus:outline-none focus:ring-2 focus:ring-indigo-500"
    >
      Open Music Player
    </a>
  );
};

export default MusicPlayerLink;
