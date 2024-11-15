# Music App
An elegant music collection manager built with React and Tailwind CSS, where users can add, edit, delete, and favorite tracks. The app includes filtering capabilities, track ratings, and options to play music directly via external links. It’s backed by a simple json-server for seamless data handling.

## Table of Contents
 - Features
 - Tech Stack
 - Getting Started
 - Installation
 - Running the App
 - Usage
 - Troubleshooting
 - Contributing
 - License

## Features
1. Add, Edit, and Delete Tracks: Manage your music collection effortlessly.
2. Favorites: Mark your favorite tracks for quick access.
3. Responsive Design: Fully optimized for desktop and mobile views using Tailwind CSS.
4. Dark Mode: Modern dark-themed UI for a polished experience.

## Tech Stack
 - Frontend: React, Tailwind CSS
 - Backend: JSON Server (mock REST API)
 - Tools: Fetch API for data handling, modern ES6+ JavaScript

## Getting Started
### Prerequisites
 - Ensure you have the following installed:
1. Node.js (v16+ recommended)
2. npm or yarn
3. Git

## Installation
1. Clone the Repository

```bash
git clone https://github.com/your-username/music-app.git
cd music-app
```
2. Install Dependencies

```bash
npm install
```
3. Start JSON Server In a separate terminal window, start the mock API server:
```bash
npx json-server --watch db.json --port 5000
```
Ensure db.json is located in the root directory. If not, create one with sample content:
```bash
{
  "tracks": []
}
```
4. Start the React App

```bash
npm start
```
The app should open in your browser at http://localhost:3000.

## Usage
1. Add Tracks
 - Fill out the form to add a new track to your collection.
2. Edit/Delete Tracks
 - Click "Edit" to update track details or "Delete" to remove a track.
3.Mark Favorites
 - Use the "Favorite" button to toggle favorite status for a track.
4. Rate Tracks
 - Click the stars on the track card to rate it.

## Troubleshooting
 - Common Issues
1. JSON Server Not Running
Ensure json-server is running on http://localhost:5000.
Check if the port matches in Dashboard.js:
```bash
fetchData("http://localhost:5000/tracks");
```
2. CORS Issues
If you encounter CORS errors, install a browser extension like CORS Unblock.

3. CSS Not Applying
Check if Tailwind CSS is correctly configured:
Ensure tailwind.config.js exists.
Verify that the styles are imported in index.css:
```bash
@tailwind base;
@tailwind components;
@tailwind utilities;
```

4. React Dev Server Not Starting
Ensure no other processes are running on port 3000. If it’s in use, try:
```bash
npm start -- --port 3001
```
## Contributing
 - We welcome contributions! To get started:
1. Fork the repository.
2. Create a new branch: 
```bash
git checkout -b feature/your-feature-name.
```
3. Commit your changes: 
```bash
git commit -m 'Add some feature'.
```
4. Push to the branch: 
```bash
git push origin feature/your-feature-name.
```
5. Open a pull request.

## License
This project is licensed under the MIT License. See the LICENSE file for details.

