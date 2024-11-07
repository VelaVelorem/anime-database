import '../styles/NavFilter.module.css' 

const NavFilter = () => {
    
    const preventReload = (e) => {
        e.preventDefault();
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
                            type="text" className="rounded-md px-8 py-1" placeholder="Search Anime..."></input>
                        </form>
                    </li>
                </ul>
            </div>
        </nav>
        </>
    )
}

export default NavFilter;