import './App.css';
import AnimeGallery from './components/AnimeGallery';
import Footer from './components/Footer';
import Header from './components/Header';
import NavFilter from './components/NavFilter';
import { useState, useEffect } from 'react';

function App() {
  const animeApi = 'https://api.jikan.moe/v4/top/anime?type=tv&sfw=true&limit=12&filter=airing';

  const [animeList, setAnimeList] = useState([]);
  const [filteredAnime, setFilteredAnime] = useState([])

  useEffect(() => {
    const fetchAnimeGenre = async () => {
      const result = await fetch(animeApi);
      const data = await result.json();
      setAnimeList(data.data);
      setFilteredAnime(data.data);
    };
    fetchAnimeGenre();
  }, []);

  return (
    <>
      <Header />
      <NavFilter animeList={animeList} setFilteredAnime={setFilteredAnime} />
      <AnimeGallery animeList={filteredAnime} />
      <Footer />
    </>
  );
}

export default App;
