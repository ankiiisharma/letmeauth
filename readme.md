#

This repository contains a MERN CRUD application that allows users to register and log in. The frontend is built with React, and the backend uses Node.js, Express, and MongoDB. Authentication is handled securely using bcrypt and JSON Web Tokens (JWT).

### Techstack used

<p align="center">
    <img src="https://skillicons.dev/icons?i=react,mongodb,express,nodejs,npm" />
  </a>
</p>

### Prerequisites

Before running this project, ensure you have the following installed:

- Node.js
- npm (Node Package Manager)
- MongoDB

You can check your installations by running `node -v` and `npm -v` in the terminal. MongoDB should be running in the background for the backend to connect successfully.

### Project Structure

The project is divided into two main folders:

- `client/`: Contains all the frontend code built with React.
- `server/`: Contains all the backend code, including the API built with Node.js and Express, and MongoDB integration.

### Getting Started

To get this application running locally, follow these steps for both the frontend and backend setup.

### Running the Frontend

- Navigate to the frontend folder:
  ```bash
  cd client/
  ```
- Install dependencies:
  ```bash
  npm install
  ```
- Start the development server:
  ```bash
  npm run dev
  ```

Application will start and typically run on http://localhost:5173

### Running the Backend

- Navigate to the backend folder:
  ```bash
  cd server/
  ```
- Install dependencies:

  ```bash
  npm install
  ```

- Start the backend server:
  ```bash
  npm start
  ```

The server will run on http://localhost:8000.

### Features

- User Registration and Authentication:
- Secure registration and login functionality using bcrypt for hashing passwords and JWT for maintaining session state.
- CRUD Operations: Users can create, read, update, and delete data interactively once logged in.

### Environment Variables

- For the backend to function properly, you will need to set up a few environment variables:

`MONGODB_URI:` The connection string to your MongoDB database.

`JWT_SECRET:` A secret key for encoding and decoding JWT tokens.
These variables can be set in a .env file in the server/ directory.

API Endpoints
The backend defines several API endpoints:

### Contributions

Contributions are welcome! Please feel free to submit a pull request or open an issue.
