# 🎬 TMDB CLI – Movie Browser from Terminal

A lightweight command-line interface (CLI) tool to browse movies from **The Movie Database (TMDB)** directly in your terminal.  
You can quickly fetch categories like **now playing, popular, top rated, or upcoming** using simple commands.

🔗 Project Challenge Source:  
https://roadmap.sh/projects/tmdb-cli

---

## 🚀 Features
- Fetches real-time movie data from TMDB API
- Easy CLI usage with friendly options

---


### Setup TMDB API Token

- Create an account at https://www.themoviedb.org
- Go to: Settings → API → API Read Access Token
- Copy your Bearer token
- Create a .env file in the project root containing:
- TOKEN=YOUR_TMDB_BEARER_TOKEN_HERE

## 📦 Installation

### 1. Clone the repository:
- git clone https://github.com/ZaidBinRashid/TMDB-CLI-Tool.git
- cd tmdb-cli

### 2. Install dependencies:
- npm install

### 2. (Optional) Make the CLI tool available globally:
- npm link

### 3. Run the CLI and pass a movie type:
- tmdb --type playing

Or using the short flag:
- tmdb -t popular

