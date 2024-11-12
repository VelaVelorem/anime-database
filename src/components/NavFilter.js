import '../styles/NavFilter.module.css'
import { useState } from 'react';

const NavFilter = ({ animeList, setFilteredAnime }) => {

    const [searchAnime, setSearchAnime] = useState('');

    const preventReload = (e) => {
        e.preventDefault();
    }

    const handleSearchNav = (e) => {
        const searchTitle = e.target.value;
        setSearchAnime(searchTitle);

        if (searchTitle === '') {
            setFilteredAnime(animeList);
        } else {
            const filteredResults = animeList.filter(anime =>
                anime.title.toLowerCase().includes(searchTitle.toLowerCase())
            );
            setFilteredAnime(filteredResults);
        };
    }



    return (
        <>
            <nav>
                <div className="w-full p-5 shadow-xl">
                    <ul className="flex justify-evenly tracking-wider text-sm">

                        <li>
                            <select
                                name="anime-genres" id="genres" className="rounded-md px-8 py-1 text-midnight"
                            >
                                <option value="" selected disabled>Select genre...</option>
                                <option value="">Action</option>
                                <option value="">Adventure</option>
                                <option value="">Mystery</option>
                                <option value="">Shoujo</option>
                                <option value="">Shounen</option>
                            </select>
                        </li>
                        <li>
                            <form
                                onSubmit={preventReload}
                            >
                                <input
                                    type="text"
                                    className="rounded-md px-8 py-1"
                                    placeholder="Search Anime..."
                                    value={searchAnime}
                                    onChange={handleSearchNav}></input>
                            </form>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default NavFilter;