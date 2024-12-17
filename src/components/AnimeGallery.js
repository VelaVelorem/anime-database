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
                className="anime-gallery container mx-auto grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 px-3 py-3 mt-20">
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
                <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
                    <div className="bg-white rounded-lg shadow-lg p-5 w-11/12 sm:w-3/4 md:w-1/2 lg:w-1/3">
                        <div className="flex justify-between items-center">
                            <h2 className="text-2xl font-bold">{selectedAnime?.title}</h2>
                            <button className="text-gray-dark hover:text-gray bg-gray p-3" onClick={handleCloseModal}>Exit</button>
                        </div>
                        <div className="mt-4">
                            <img
                                className="rounded-lg w-full mb-4"
                                src={selectedAnime?.images.jpg.large_image_url || selectedAnime?.images.jpg.image_url}
                                alt={selectedAnime?.title}
                            />
                            <p className="text-sm text-gray-700 mb-2">Episodes: {selectedAnime?.episodes || 'N/A'}</p>
                            <p className="text-sm text-gray-700 mb-2">Rating: {selectedAnime?.score || 'N/A'}</p>
                            <p className="text-sm text-gray-700 mb-2">Status: {selectedAnime?.status || 'N/A'}</p>
                            <p className="text-sm text-gray-700">{selectedAnime?.synopsis || 'No description available.'}</p>
                        </div>
                        <div className="mt-5 text-right">
                            <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600" onClick={handleCloseModal}>
                                Close
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default AnimeGallery;