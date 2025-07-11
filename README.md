# 🎧 Spotify Clone

A full-stack Spotify clone that integrates with the official Spotify Web API for real data, real OAuth login, and a clean UI.  
Built using React, Node.js, and Chakra UI for a modern and responsive user experience.

---

## ✨ Features

-   🔑 Spotify OAuth login using your real Spotify account.
-   🎶 Fetch and display real user data from Spotify Web API.
-   📃 View playlists, top tracks, recently played, and more.
-   🔍 Search for songs, artists, or albums using the Spotify API.
-   💡 Responsive design built with Chakra UI.
-   🧪 Full-stack architecture powered by React (frontend) and Node.js (backend).

---

## 🛠️ Tech Stack

| Layer    | Technology Used                                                         |
| -------- | ----------------------------------------------------------------------- |
| Frontend | [React](https://reactjs.org/), [Chakra UI](https://chakra-ui.com/)      |
| Backend  | [Node.js](https://nodejs.org/)                                          |
| API      | [Spotify Web API](https://developer.spotify.com/documentation/web-api/) |
| Auth     | Spotify OAuth 2.0                                                       |

---

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/spotify-clone.git
cd spotify-clone
```

### 2. Install Dependencies

#### Frontend

```bash
cd client
npm install
```

#### Backend

```bash
cd server
npm install
```

### 3. Set Up Environment Variables

Create `.env` files in both `client` and `server` directories as needed.

#### Example `.env` for server:

```env
SPOTIFY_CLIENT_ID=your_spotify_client_id
SPOTIFY_CLIENT_SECRET=your_spotify_client_secret
REDIRECT_URI=http://localhost:8888/callback
FRONTEND_URI=http://localhost:3000
```

> 🔐 Get your Spotify credentials from the [Spotify Developer Dashboard](https://developer.spotify.com/dashboard/).

### 4. Run the App

#### Start Backend

```bash
cd server
npm start
```

#### Start Frontend

```bash
cd client
npm start
```

Now open `http://localhost:3000` in your browser.

---

## 🧪 Testing

This project does not include automated tests but supports manual validation through full Spotify OAuth flow and API responses.

---

## 🎯 Use Cases

-   Learn how to integrate third-party APIs (Spotify) in a full-stack app.
-   Understand OAuth login flow and token management.
-   Build real-world music dashboards and interfaces.
