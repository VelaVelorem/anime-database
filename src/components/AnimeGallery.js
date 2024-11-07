import '../styles/AnimeGallery.module.css';

const AnimeGallery = ({ animeList }) => {

    return (
        <>
            <section className="anime-gallery container mx-auto grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 px-3 py-3 mt-20">
                {animeList.map((anime, index) => (
                    <article className="anime-card flex mx-3 my-2 rounded-lg h-72 bg-gray-dark shadow-md hover:-translate-y-3" key={anime.mal_id}>
                        <img className="anime-card-poster h-72" src={anime.images.jpg.image_url} alt={anime.title} />
                        <div className="anime-details p-3 w-full flex flex-col overflow-ellipsis overflow-auto">
                            <h3 className="anime-card-title text-xl tracking-wide text-balance text-baby-blue font-bold"> {anime.title}</h3>
                            <p className="anime-card-synopsis text-sm mt-2 text-gray-light"> Episodes: {anime.episodes || 'NA'}</p>
                            <p className="anime-card-rating text-sm text-gray-light"> Rating: {anime.score}</p>
                            <p className="anime-card-status text-sm text-gray-light"> Status: {anime.status}</p>
                            <p className="anime-genres text-sm text-gray-light flex flex-wrap">
                                {anime.genres.map((genre) => (
                                    <p key={genre.mal_id} className="genre-btn px-2 bg-seafoam ms-1 rounded-lg mb-1 mt-2">{genre.name}</p>
                                ))}
                            </p>
                        </div>
                    </article>
                ))}
            </section>
        </>
    )
}

export default AnimeGallery;