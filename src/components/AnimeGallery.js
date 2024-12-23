import '../styles/AnimeGallery.module.css';
import { useState } from 'react';

const AnimeGallery = ({ animeList }) => {

    const [isModalOpen, setIsModalOpen] = useState(false)
    const [selectedAnime, setSelectedAnime] = useState(null);

    const handleOpenModal = (anime) => {
        setSelectedAnime(anime);
        setIsModalOpen(true);
    }

    const handleCloseModal = () => {
        setSelectedAnime(null);
        setIsModalOpen(false);
    }

    return (
        <>
            <section
                className="anime-gallery container mx-auto grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 px-3 py-3 mt-20 hover:cursor-pointer">
                {animeList.map((anime, index) => (
                    <div
                        className="anime-card flex mx-3 my-2 rounded-lg h-72 bg-gray-dark shadow-md hover:-translate-y-3"
                        key={anime.id}
                        onClick={() => handleOpenModal(anime)}>

                        <img className="anime-card-poster h-72" src={anime.images.jpg.image_url} alt={anime.title} />
                        <div className="anime-details p-3 w-full flex flex-col overflow-ellipsis overflow-auto">
                            <h3 className="anime-card-title text-xl tracking-wide text-balance text-baby-blue font-bold"> {anime.title}</h3>
                            <p className="anime-card-synopsis text-sm mt-2 text-gray-light"> Episodes: {anime.episodes || 'N/A'}</p>
                            <p className="anime-card-rating text-sm text-gray-light"> Rating: {anime.score}</p>
                            <p className="anime-card-status text-sm text-gray-light"> Status: {anime.status}</p>
                            <p className="anime-genres text-sm text-gray-light flex flex-wrap">
                                {anime.genres.map((genre) => (
                                    <p key={genre.id} className="genre-btn px-2 bg-seafoam ms-1 rounded-lg mb-1 mt-2">{genre.name}</p>
                                ))}
                            </p>
                        </div>

                    </div>
                ))}
            </section>

            {isModalOpen && (
                <div className="fixed flex inset-0 items-center justify-center z-50 bg-black bg-opacity-60 ">
                    <div className="bg-white items-center rounded-lg shadow-lg p-5 max-h-full sm:w-3/3 md:w-3/3 lg:w-1/3">
                        <h2
                            className="text-3xl font-bold mb-6 tracking-wider text-center text-wrap text-midnight">
                            {selectedAnime?.title}
                        </h2>

                        <div className="mt-4 img-text flex px-3">
                            <img
                                className="rounded-lg mb-4 h-96"
                                src={selectedAnime?.images.jpg.large_image_url || selectedAnime?.images.jpg.image_url}
                                alt={selectedAnime?.title}
                            />
                            <div className="flex flex-col flex-wrap items-center justify-center">
                                <p className="text-md text-gray-700 px-7 max-h-128 text-wrap text-ellipsis overflow-y-auto">{selectedAnime?.synopsis || 'No description available.'}</p>

                                <div className="btn-holder">
                                    <button
                                        className="text-white px-4 py-1 mt-5 bg-seafoam rounded-lg uppercase tracking-wider hover:text-gray-light hover:bg-midnight shadow-md transition-all"
                                        onClick={handleCloseModal}>Return
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default AnimeGallery;