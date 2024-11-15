# AniScope - Anime Database 🎌

Welcome to my **Anime Database** project! As an anime fan, I wanted to create a place to explore popular anime that’s currently airing, using data pulled directly from the Jikan Anime API. This app was also a personal milestone, as it allowed me to dive deeper into API integration, state management, and experimenting with Tailwind CSS for responsive design.

---

## Background

I chose this project because I enjoy watching anime and thought it would be a fun way to combine a personal interest with web development. I wanted to challenge myself with React and Tailwind CSS, integrating API data into a clean and user-friendly interface. By using the Jikan API, I was able to bring live anime data into the app, showcasing titles, genres, episode counts, and more.

## Features

### 1. Anime Gallery 🖼️
   - Displays a grid of top airing, safe-for-work anime.
   - Each anime card dynamically shows details such as title, number of episodes, and genres.
   - Limits to 12 anime at a time for a smooth experience.

### 2. Genre Selection 🎭
   - Users can search by genre to filter anime based on their interests.
   - An ongoing feature with plans to add even more filter customization.

### 3. Real-Time Search 🔍
   - Type in the search bar to filter anime titles dynamically.
   - Utilizes the filter method to instantly show matching titles based on user input.

### 4. Future Feature: Anime News 📰
   - A planned feature to add a dedicated page for anime-related news.
   - Will use `BrowserRouter` for easy navigation to this upcoming section.

## Technical Overview

### Libraries & Tools
   - **React**: Essential for handling API data, building reusable components, and managing the app’s state.
   - **Tailwind CSS**: Used for its utility-first approach, making it easy to create a responsive and clean design.
   - **Jikan Anime API**: Provides all anime-related data, including images, titles, and episode counts.

### Key React Features & Hooks
   - **useState**: Manages states like anime list, search term, and genre filters.
   - **useEffect**: Manages API calls and re-renders when state dependencies change.
   - **useContext**: Shares state between components without excessive prop drilling.

### Responsive Layout
   - Built from scratch using **CSS Grid** and **Flexbox** for a layout that adapts well to various screen sizes.
   - Tailwind CSS’s responsive utilities help maintain usability on mobile, tablet, and desktop views.

### API Integration
   - Fetches anime data using async functions and `useEffect`.
   - Utilizes query parameters to filter for safe-for-work, currently airing shows.
   - API responses are mapped into reusable anime card components.

## How to Use

1. **Browse Top Airing Anime**:
   - The main gallery displays a curated list of popular anime currently airing. Scroll through to view details for each title.

2. **Search Anime**:
   - Use the search bar at the top to filter anime titles in real-time.

3. **Filter by Genre**:
   - Select specific genres to view anime within your favorite categories.

4. **Navigate to Anime News** (Coming Soon):
   - A news section is planned for updates on anime releases and related news.

## Future Enhancements 🚀
   - **Anime News Page**: A dedicated section for anime news.
   - **Improved Genre Filtering**: Refine genre options for a smoother user experience.
   - **Total Episodes & Summary**: Add more details per anime, such as modal upon clicking anime to read summary.

