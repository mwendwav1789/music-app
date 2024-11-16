# Music App

Designed by Victor Mwendwa.

Music App is a web application that allows users to explore, discover, and manage their favorite music tracks. The app provides features such as filtering music, adding new tracks, viewing track details, and managing user profiles.

## Table of Contents

- Installation
- How to Run the App
- Contributing
- Troubleshooting
- Licensing

## Installation

To get started with this app, follow these steps:

1. Clone the repository to your local machine:

   ```bash
   git clone https://github.com/your-username/music-app.git
   ```

2. Navigate into the project directory:

```bash
cd music-app
```

3. Install the necessary dependencies for both the frontend and backend:

```bash
npm install
```

4. Install json-server globally (if you haven't already):

```bash
npm install -g json-server
```

5. Create a db.json file (if not present) to store your tracks and users (sample db.json below).

- Make sure the frontend and backend dependencies are installed.

## How to Run the App

- Follow these steps to run both the frontend (React app) and the backend (json-server):

### Frontend (React App)

1. Start the frontend development server:

```bash
npm start
```

- This will open the app in your default browser at http://localhost:3000.

### Backend (json-server)

1. In a new terminal window, navigate to the project directory and start the backend server:

```bash
json-server --watch db.json --port 5000
```

- The backend server will be running at http://localhost:5000.

- The frontend (React app) will fetch data from this backend (tracks, users, etc.).

## Contributing

- We welcome contributions to the Music App! Here's how you can help:

1. Fork the repository to your own GitHub account.
2. Clone the forked repository to your local machine:

```bash
git clone https://github.com/your-username/music-app.git
```

3. Create a new branch for your changes:

```bash
git checkout -b feature-branch
```

4. Make your changes and test them.
5. Commit your changes:

```bash
git commit -m "Description of changes"
```

6. Push your changes to your fork:

```bash
git push origin feature-branch
```

7. Open a pull request to merge your changes into the main repository.

- Please follow the code style and add tests where necessary. Also, provide a clear description of your changes.

## Troubleshooting

1. npm start is not working:
   Ensure you have all dependencies installed by running:

```bash
npm install
```

If there are issues with port 3000, check if another app is using that port and change it in the React app configuration.

2. Backend server not running:
   Ensure that json-server is installed globally or locally.
   Check if db.json is correctly set up and ensure the backend is running on http://localhost:5000.

3. CORS Issues:
   If the frontend and backend are not on the same domain/port, you may run into CORS (Cross-Origin Resource Sharing) issues.
   Consider using a CORS proxy for development or set up proper CORS headers on your backend.

4. Data not reflecting after form submission:
   Ensure the json-server is running and accessible at http://localhost:5000.
   Check that your POST requests are sending data correctly and that db.json is being updated.

## Licensing

This project is licensed under the MIT License - see the LICENSE file for details.
