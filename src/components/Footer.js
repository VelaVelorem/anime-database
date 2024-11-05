import '../styles/Footer.module.css' 

const Footer = () => {
    return (
        <>
        <footer className="w-full p-10 mt-20 bg-gray-dark text-teal">
            <h2 className="text-3xl text-baby-blue mb-5 text-start">Contact</h2>
            <ul className="flex flex-col">
                <li>Github</li>
                <li>Linkedin</li>
                <li>Email</li>
                <li>Resume</li>
            </ul>
        </footer>
        </>
    )
}

export default Footer;