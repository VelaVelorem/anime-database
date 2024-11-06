import '../styles/Header.module.css'

const Header = () => {
    return (
        <>
            <header>
                <div className="img-holder w-auto bg-charcoal">
                    <div className="top-banner flex px-5 py-2 items-center justify-between">
                        <h3 className="font-megrim text-5xl text-teal">AniScope</h3>

                        <ul className="btn-holder flex text-sm">
                            <li className="mx-5">
                                <button type="button" className="rounded-md px-3 py-1 bg-gray-light">Sign in</button>
                            </li>
                            <li>
                                <button type="button" className="rounded-md px-3 py-1 bg-gray-light">Sign up</button>
                            </li>
                        </ul>
                    </div>

                    <img src="" alt="" className="h-48 object-cover" />
                </div>
            </header>
        </>
    )
}

export default Header;