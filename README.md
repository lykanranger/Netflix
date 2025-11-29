Netflix Clone - A Cinematic Streaming Experience

A visually stunning and responsive Netflix clone that simulates a premium streaming service experience. This application features secure user authentication, profile management, dynamic content browsing, and a custom "Who's Watching?" profile selection interface, all wrapped in a sleek, dark-themed UI.

Live Demo: https://netflix-miniproject.vercel.app/

✨ Features

Iconic Intro Animation: A custom CSS/SCSS animation replicating the famous "N" ribbon intro and sound effect.

User Authentication: Secure login and signup powered by Firebase Auth.

Profile Management: Users can create, edit, and select different viewer profiles, just like the real platform.

Dynamic Content: Browse movies and TV shows organized by categories (Trending, Top Rated, Action, etc.).

My List: Users can save their favorite titles to a personal watchlist.

Responsive Design: A fully mobile-first interface built with Tailwind CSS that adapts perfectly to phones, tablets, and desktops.

Protected Routes: Secure navigation that prevents unauthorized access to content pages.

🛠️ Tech Stack

This project is built with a modern, full-stack JavaScript architecture:

Frontend:

React (with TypeScript)

Vite for lightning-fast build times

React Router for seamless client-side routing

Tailwind CSS for utility-first styling

SASS/SCSS for complex animations (Intro Loader)

Lucide React for modern iconography

Backend & Services:

Firebase Authentication for user management

Firebase Firestore (or Realtime Database) for storing user profiles and watchlists

TMDB API (The Movie Database) for fetching real movie data and images

🚀 Getting Started

To get a local copy up and running, follow these simple steps.

Prerequisites

Make sure you have Node.js (v16 or later) installed on your machine.

Installation & Setup

Clone the repository:

git clone [https://github.com/lykanranger/Netflix.git](https://github.com/lykanranger/Netflix.git)


Navigate to the project directory:

cd Netflix


Install dependencies:

npm install


Set up environment variables:
Create a new file named .env in the root of your project. Add your Firebase and API keys:

VITE_FIREBASE_API_KEY=your_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_project_id.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_project_id.appspot.com
VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
VITE_FIREBASE_APP_ID=your_app_id


Run the development server:

npm run dev


The application should now be running on http://localhost:5173/.

🖼️ Screenshots

Login Page

Profile Selection





Browse Page

Mobile View





❤️ Credits

Netflix Clone by Karun.
© 2025. All rights reserved.
