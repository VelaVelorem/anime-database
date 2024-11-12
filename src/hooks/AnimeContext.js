// import { createContext, useContext, useState, useEffect } from "react";

// const AnimeContext = createContext();

// export const useAnime = () => useContext(AnimeContext);

// export const AnimeProvider = ({ children }) => {
//     const animeApi = 'https://api.jikan.moe/v4/top/anime?type=tv&sfw=true&limit=12&filter=airing'
//     const [animeList, setAnimeList] = useState([]);

//     useEffect(() => {
//         const fetchAnimeList = async () => {
//             const response = await fetch(animeApi);
//             const data = await response.json();
//             setAnimeList(data.data);
//         };
//         fetchAnimeList();
//     }, []);

//     return (
//         <AnimeContext.Provider value={{ animeList}}>
//             {children}
//         </AnimeContext.Provider>
//     )
// }   