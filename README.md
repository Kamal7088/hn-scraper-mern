# Hacker News Stories Scraper - Complete MERN Stack Application

This is a full-stack web application that automatically scrapes the latest top stories from Hacker News, stores them in a database, and allows authenticated users to bookmark their favorite stories. A complete learning project demonstrating modern web development practices! 🚀

## Project Overview

Hacker News is a popular platform for sharing tech and startup-related news. This application demonstrates:
- Automated web scraping from external websites
- Secure data storage in MongoDB
- User registration and authentication system
- Personalized bookmarking functionality
- Persistent user data across sessions

## Key Features

✅ **Automatic Web Scraping** - Fetches top 10 Hacker News stories on server startup  
✅ **User Authentication** - Secure login and registration with encrypted passwords  
✅ **Bookmarking System** - Save and manage your favorite stories  
✅ **Protected Routes** - Bookmarks page accessible only to authenticated users  
✅ **Responsive Design** - Works seamlessly on mobile, tablet, and desktop devices  
✅ **RESTful API** - Includes manual scraping endpoint for on-demand updates

## Technology Stack

**Frontend:**
- **React 19** - Component-based UI framework
- **Vite** - Lightning-fast build tool for modern web development
- **React Router** - Client-side routing between pages
- **Axios** - HTTP client for API communication
- **Framer Motion** - Smooth animations and transitions
- **Lucide Icons** - Modern SVG icon library

**Backend:**
- **Node.js + Express.js** - JavaScript runtime and web framework
- **MongoDB** - NoSQL database for data persistence
- **Mongoose** - Object Data Modeling (ODM) for MongoDB
- **JSON Web Tokens (JWT)** - Secure authentication tokens
- **bcryptjs** - Password hashing and encryption
- **Axios** - HTTP requests for web scraping
- **Cheerio** - jQuery-like HTML parsing library
- **node-cron** - Scheduled background job execution

## Installation & Setup Guide

### Step 1: Clone the Repository

\\\ash
git clone https://github.com/Kamal7088/hn-scraper-mern.git
cd hn-scraper-mern
\\\

### Step 2: Backend Configuration

Navigate to the backend directory and install dependencies:
\\\ash
cd backend
npm install
\\\

Create a \.env\ file in the backend directory with the following configuration:
\\\env
PORT=5000
MONGO_URI=mongodb+srv://username:password@cluster.mongodb.net/database-name
JWT_SECRET=your-super-secret-jwt-key-here
FRONTEND_URL=http://localhost:5173
\\\

**Note:** Get your MongoDB URI from [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) (free tier available)

Start the backend server:
\\\ash
npm start
\\\

For development with auto-reload:
\\\ash
npm run dev
\\\

The backend will run on \http://localhost:5000\

### Step 3: Frontend Setup

Open a new terminal and navigate to the frontend directory:
\\\ash
cd frontend
npm install
npm run dev
\\\

The development server will start on \http://localhost:5173\. Open this URL in your browser to access the application.

## Project Directory Structure

\\\
assignment/
├── backend/
│   ├── config/
│   │   └── db.js ......................... MongoDB connection configuration
│   ├── models/
│   │   ├── User.js ....................... User schema with authentication
│   │   └── Story.js ...................... Story data model
│   ├── controllers/
│   │   ├── authController.js ............ Authentication logic (login/register)
│   │   └── storyController.js ........... Story and bookmark operations
│   ├── routes/
│   │   ├── authRoutes.js ............... Auth endpoints (/api/auth/*)
│   │   └── storyRoutes.js .............. Story endpoints (/api/stories/*)
│   ├── middleware/
│   │   └── authMiddleware.js ........... JWT verification middleware
│   ├── utils/
│   │   ├── scraper.js .................. Web scraping logic for Hacker News
│   │   └── generateToken.js ............ JWT token generation
│   ├── server.js ........................ Express server entry point
│   └── package.json ..................... Backend dependencies
│
└── frontend/
    ├── src/
    │   ├── api/
    │   │   └── api.js .................. Axios instance with interceptors
    │   ├── pages/
    │   │   ├── Landing.jsx ............ Welcome page (before login)
    │   │   ├── Login.jsx .............. User login form
    │   │   ├── Register.jsx ........... User registration form
    │   │   ├── Home.jsx ............... Main stories feed
    │   │   └── Bookmarks.jsx .......... Saved stories page
    │   ├── components/
    │   │   ├── Navbar.jsx ............. Navigation bar
    │   │   └── StoryCard.jsx .......... Individual story component
    │   ├── context/
    │   │   └── AuthContext.jsx ........ Global authentication context
    │   ├── App.jsx .................... Route definitions
    │   └── main.jsx ................... React application entry point
    └── package.json .................... Frontend dependencies
\\\

## How It Works

### 🔄 Data Flow

1. **Web Scraping** - On server startup, Cheerio parses Hacker News HTML to extract story data
2. **Data Storage** - Stories are stored in MongoDB with unique identifiers
3. **User Authentication** - Passwords are hashed with bcryptjs before storage
4. **Session Management** - JWT tokens are issued upon login and stored in localStorage
5. **API Communication** - Frontend sends requests to backend with JWT in headers
6. **Bookmarking** - Users can save/unsave stories to their profile

### 🔌 API Endpoints

**Authentication:**
\\\
POST   /api/auth/register          Create new user account
POST   /api/auth/login             Login and receive JWT token
GET    /api/auth/logout            Clear session
\\\

**Stories:**
\\\
GET    /api/stories                Fetch all stories
GET    /api/stories/:id            Get specific story details
PUT    /api/stories/:id/bookmark   Toggle bookmark status
POST   /api/stories/scrape         Manually trigger web scrape
\\\

## Important Security Notes

🔐 **JWT Tokens** - Automatically included in all authenticated requests via axios interceptor  
🔒 **Password Hashing** - Passwords never stored in plain text, bcryptjs encryption applied  
🛡️ **CORS Protection** - Cross-origin requests validated against allowed frontend URLs  
🔑 **Environment Variables** - Sensitive data stored in .env, excluded from git  
🚪 **Protected Routes** - Home and Bookmarks pages only accessible to logged-in users  

## Deployment

**Frontend (Vercel/Netlify):**
\\\ash
npm run build    # Creates optimized production build
\\\

**Backend (Heroku/Render/Railway):**
- Ensure \Procfile\ exists in backend directory
- Push to deployment platform
- Set environment variables in platform dashboard

## Troubleshooting

| Issue | Solution |
|-------|----------|
| \Cannot find module\ | Run \
pm install\ in appropriate directory |
| \MongoDB connection failed\ | Verify MONGO_URI in .env, check internet connection |
| \CORS error in browser\ | Confirm FRONTEND_URL in backend .env matches your frontend URL |
| \Token expired error\ | Clear browser localStorage and login again |
| \Port 5000 already in use\ | Change PORT in .env or kill existing process on that port |

## Learning Outcomes

This project demonstrates:
- Full MERN stack development
- RESTful API design patterns
- JWT-based authentication
- Web scraping with Cheerio and Axios
- MongoDB schema design with Mongoose
- React hooks and context API
- Component-based architecture
- Environment variable management
- CORS and security best practices

## License

Free to use for educational and learning purposes.

---

*This is a complete full-stack application built for learning and assessment purposes. Feel free to fork, modify, and deploy!*
