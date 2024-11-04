import '../styles/AnimeGallery.module.css';

const AnimeGallery = ({ animeList }) => {

    return (
        <>
            <section className="anime-gallery grid grid-cols-4">
                {animeList.map((anime, index) => (
                    <div className="anime-card" key={anime.mal_id}>
                        <img className="anime-card-poster" src={anime.images.jpg.image_url} alt={anime.title} />
                        <h3 className="anime-card-title"> {anime.title}</h3>
                        <p className="anime-card-synopsis"> {anime.synopsis}</p>
                    </div>
                ))}
            </section>
        </>
    )
}

export default AnimeGallery;