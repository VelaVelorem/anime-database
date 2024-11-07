import '../styles/Footer.module.css' 

const Footer = () => {
    return (
        <>
        <footer className="w-full p-10 mt-20 bg-gray-dark text-teal">
            <h2 className="text-3xl text-baby-blue mb-8 text-start font-rajdhani">Contact</h2>
            <ul className="flex flex-col lowercase text-sm tracking-wider">
                <li className="mb-1">Portfolio</li>
                <li className="mb-1">Github</li>
                <li className="mb-1">Linkedin</li>
                <li className="mb-1">Email</li>
                <li className="mb-1">Resume</li>
            </ul>
            <p className="text-xs text-pewter text-center tracking-wider">@2024 Haneefah Witherspoon</p>
        </footer>
        </>
    )
}

export default Footer;