import '../styles/Footer.module.css' 

const Footer = () => {
    return (
        <>
        <footer className="w-full p-10 mt-20 bg-gray-dark text-teal">
            <h2 className="text-3xl text-baby-blue mb-8 text-start font-rajdhani">Contact</h2>
            <ul className="flex flex-col lowercase text-sm tracking-wider">
                <a href="https://velavelorem.github.io/hw-portfolio/"><li className="mb-1">Portfolio</li></a>
                <a href="https://github.com/VelaVelorem"><li className="mb-1">Github</li></a>
                <a href="https://www.linkedin.com/in/haneefah-witherspoon/"><li className="mb-1">Linkedin</li></a>
                <a href="mailto:haneefah207@gmail.com"><li className="mb-1">Email</li></a>
                <a href="https://docs.google.com/document/d/19jopPAWCT7HNrWe-XFZHfzaLhwlkE-WiVPOFpGwbYFg/edit?usp=sharing"><li className="mb-1">Resume</li></a>
            </ul>
            <p className="text-xs text-pewter text-center tracking-wider">@2024 Haneefah Witherspoon</p>
        </footer>
        </>
    )
}

export default Footer;