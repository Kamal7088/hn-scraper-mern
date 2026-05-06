# Hacker News MERN Scraper 🚀

Hey there! This is a full-stack web application built using the MERN stack (MongoDB, Express, React, Node.js). I've designed it to automatically scrape the top stories from Hacker News and allow users to authentication and bookmark their favorite stories.

The goal of this project was to build a clean, responsive, and functional application that handles data scraping, user authentication, and persistent storage efficiently.

## ✨ Features

- **Automated Web Scraping**: Fetches the top 10 stories from Hacker News every hour using a background cron job.
- **Manual Scrape Trigger**: An admin API endpoint to manually trigger a fresh scrape.
- **JWT Authentication**: Secure registration and login system.
- **Story Bookmarking**: Authenticated users can toggle bookmarks for any story.
- **Responsive Dashboard**: A modern, interactive UI built with React and Vite.
- **Pagination & Sorting**: Automatically sorts stories by points and supports easy navigation.

## 🛠️ Tech Stack

- **Frontend**: React.js, Vite, Axios, Lucide Icons
- **Backend**: Node.js, Express.js
- **Database**: MongoDB (Mongoose)
- **Scraping**: Cheerio, Axios
- **Auth**: JWT (JSON Web Tokens), Bcrypt.js
- **Cron**: Node-cron for background tasks

## 🚀 Getting Started

### Prerequisites

- Node.js (v16+)
- MongoDB (Running locally or via Atlas)

### Setup Instructions

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Kamal7088/hn-scraper-mern.git
   cd hn-scraper-mern
   ```

2. **Backend Configuration:**
   - Navigate to the `backend` folder: `cd backend`
   - Install dependencies: `npm install`
   - Create a `.env` file and add:
     ```env
     PORT=5000
     MONGO_URI=your_mongodb_connection_string
     JWT_SECRET=your_super_secret_key
     ```
   - Start the server: `npm start` (or `npm run dev`)

3. **Frontend Configuration:**
   - Navigate to the `frontend` folder: `cd ../frontend`
   - Install dependencies: `npm install`
   - Start the dev server: `npm run dev`

## 📂 Project Structure

```bash
├── backend/
│   ├── config/         # Database connection logic
│   ├── controllers/    # Request handlers (Auth, Stories)
│   ├── models/         # Mongoose schemas
│   ├── routes/         # Express API routes
│   ├── utils/          # Scraper and token helpers
│   └── server.js      # Application entry point
├── frontend/
│   ├── src/
│   │   ├── api/        # Axios interceptors
│   │   ├── components/ # Reusable UI components
│   │   ├── context/    # Auth state management
│   │   └── pages/      # View components
│   └── ...
└── README.md
```

## 📝 Approach & Implementation

I started by setting up a solid backend foundation with Express and Mongoose. The scraper uses Cheerio to parse HTML from Hacker News efficiently. For the frontend, I used the React Context API to manage the global authentication state, ensuring a smooth user experience where bookmarks are synced in real-time.

---
*Built with ❤️ for the Full Stack Developer assessment.*
