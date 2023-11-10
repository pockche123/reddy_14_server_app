# Lap1_final_project - Reddy 14 Server App

Reddy 14 Server App is the backend API for a geography game designed to make learning non-STEM subjects more interesting and engaging for kids. The game is a simple "Guess the Capital Cities" game that aims to educate and entertain young learners while teaching them about the world's capital cities.

## Table of Contents

- [Features](#features)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Technologies](#technology)
- [Contributing](#contributing)

## Features

- Provides a user-friendly and interactive platform for kids to learn about capital cities.
- Quiz-style gameplay with multiple-choice questions.
- Engaging and informative content to pique the interest of young learners.
- User account management, including registration and login.
- High-score tracking and leaderboards to encourage friendly competition.
- Easy-to-use API for frontend integration.

## Getting Started

These instructions will help you set up and run the Reddy 14 Server App on your local machine.

### Prerequisites

Before you begin, ensure you have the following installed on your system:

- [Node.js](https://nodejs.org/) - JavaScript runtime environment
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/) - Package manager
- [MongoDB](https://www.mongodb.com/) - NoSQL database system

### Installation

1. Clone the repository to your local machine using Git:

   ```shell
   git clone https://github.com/pockche123/reddy_14_server_app.git
   ```

2. Navigate to the project directory:

   ```shell
   cd reddy_14_server_app
   ```

3. Install the required dependencies:

   ```shell
   npm install
   ```

### Usage

1. Start the server:

   ```shell
   npm run dev
   ```

   The server will run on http://localhost:3000 by default. You can configure the port and other settings in the `config.js` file.

2. Access the API at `http://localhost:8080` to integrate it into your frontend application.

## API Endpoints

The Reddy 14 Server App provides the following API endpoints:

- `POST /api/register`: Register a new user.
- `POST /api/login`: Log in to an existing account.
- `GET /api/questions`: Get a list of capital city questions.
- `POST /api/questions`: Add a new capital city question (admin only).
- `GET /api/highscores`: Get the high scores and leaderboards.
- `POST /api/highscores`: Submit a new high score.

For more details on how to use these endpoints, refer to the API documentation or the code in the repository.

## Technologies
- **Node.js:** The JavaScript runtime for server-side development.

- **Express.js:** A web application framework for Node.js, used to build the server and handle HTTP requests.

- **Cors:** A package for handling Cross-Origin Resource Sharing, which is essential for security when your server is accessed by clients from different origins.

- **Nodemon:** A development dependency for automatically restarting the server during development when files change, making the development process smoother.

### Contributing
Contributions are limited to reddy_14 Members.
