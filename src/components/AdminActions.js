import React from "react";

const AdminActions = ({ track, onEdit, onDelete }) => {
  const handleEdit = () => {
    console.log(`Editing track: ${track.name}`); // Log that the track is being edited
    alert(`Editing track: ${track.name}`); // Alert that the track is being edited
    onEdit(track); // Call the edit function (if any)
  };

  const handleDelete = () => {
    console.log(`Deleting track: ${track.name}`); // Log the track that will be deleted
    alert(`Deleting track: ${track.name}`); // Alert about the track deletion
    onDelete(track); // Call the delete function (if any)
  };

  return (
    <div className="flex space-x-4">
      <button
        onClick={handleEdit}
        className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
      >
        Edit
      </button>
      <button
        onClick={handleDelete}
        className="bg-red-600 text-white py-2 px-4 rounded hover:bg-red-700"
      >
        Delete
      </button>
    </div>
  );
};

export default AdminActions;
