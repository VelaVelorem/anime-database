import '../styles/AnimeDatabase.module.css' 
import { useState, useEffect } from 'react';
import AnimeGallery from './AnimeGallery';


const AnimeDatabase = () => {

    const animeApi = 'https://api.jikan.moe/v4/top/anime?type=tv&sfw=true&limit=12&filter=airing';
    const [ animeList, setAnimeList ] = useState([]);

    useEffect(() => {
        const fetchAnimeGenre = async () => {
            const result = await fetch(animeApi);
            const data = await result.json();
            setAnimeList(data.data);
        };
        fetchAnimeGenre();
    }, []);

    return (
        <>
        <AnimeGallery animeList={animeList} />
        </>
    )
}

export default AnimeDatabase;