# 🍿 usePopcorn

A modern React application for discovering movies and tracking your watched films. Built with React hooks and the OMDb API, usePopcorn provides an intuitive interface for movie enthusiasts to search, rate, and manage their movie collection.

## 📸 Preview

![Project Preview 1](/public/project-preview-1.png)
![Project Preview 2](/public/project-preview-2.png)

## ✨ Features

- **Movie Search**: Real-time search functionality with debounced API calls
- **Movie Details**: Comprehensive movie information including plot, cast, director, and IMDb ratings
- **Personal Ratings**: Rate movies with an interactive star rating system
- **Watched List**: Keep track of movies you've watched with your personal ratings
- **Statistics**: View average ratings and runtime statistics for your watched movies
- **Responsive Design**: Optimized for both desktop and mobile devices
- **Keyboard Navigation**: Press Escape to close movie details
- **Collapsible Sections**: Toggle between search results and watched movies
- **Error Handling**: Graceful handling of API errors and missing movie posters

## 🚀 Technologies Used

- **React 18** - Modern React with hooks (useState, useEffect)
- **OMDb API** - Movie database for fetching movie information
- **FontAwesome** - Icon library for UI elements
- **CSS3** - Custom styling with responsive design

## ⚙️ Installation

1. Clone the repository:

```bash
git clone https://github.com/A-Karim2003/usePopcorn.git
cd usepopcorn
```

2.Install dependencies:

```bash
npm install
```

3.Start the development server:

```bash
npm run dev
```

5.Open your browser and navigate to `http://localhost:5173`

## 🎯 Usage

1. **Search Movies**: Use the search bar to find movies by title
2. **View Details**: Click on any movie from the search results to view detailed information
3. **Rate Movies**: Use the star rating system to rate movies you've watched
4. **Add to Watched List**: Click "Add to list" to save the movie with your rating
5. **Manage Watched Movies**: View your watched movies and remove them using the 'x' button
6. **View Statistics**: Check your movie watching statistics in the watched movies section

## 📁 Project Structure

```
src/
├── assets/
├── components/
│   ├── header/
│   │   ├── Header.jsx
│   │   └── header.css
│   ├── movie-review-section/
│   │   ├── MovieDescription.jsx
│   │   ├── MoviePreview.jsx
│   │   ├── MoviePreviewSection.jsx
│   │   └── SelectRatings.jsx
│   ├── searchResult/
│   │   ├── SearchResult.jsx
│   │   └── searchResults.jsx
│   ├── watched-movies-section/
│   │   ├── Movies-watched-summary.jsx
│   │   ├── Watchedmovie.jsx
│   │   ├── WatchedMovies.jsx
│   │   └── WatchedMoviesSection.jsx
│   ├── Box.jsx
│   ├── Button.jsx
│   ├── Loading.jsx
│   ├── Main.jsx
│   └── MovieNotFound.jsx
├── hooks/
│   ├── useFetchMovies.js
│   ├── useKey.js
│   └── useLocalStorage.js
├── utils/
│   └── math.js
├── App.jsx
├── index.css
└── main.jsx
```

## 🌟 Key Features Breakdown

### Search Functionality

- Debounced search with 750ms delay to optimize API calls
- Minimum 3 characters required for search
- Automatic deduplication of search results

### Movie Rating System

- Interactive 10-star rating system
- Hover effects for better user experience
- Prevents duplicate ratings for the same movie

### Error Handling

- Graceful API error handling
- Fallback images for missing movie posters
- User-friendly error messages
