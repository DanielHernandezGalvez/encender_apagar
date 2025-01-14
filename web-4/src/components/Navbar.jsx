import logo from "../assets/logo-amarillo.png"
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa"

const Navbar = () => {
    return (
        <nav className="flex items-center justify-between py-6">
            <div className="flex flex-shink-0 items-center">
                <a href="/">
                    <img src={logo} className="mx-2" width={50} height={33} alt="" />
                </a>
            </div>
            <div className="m-8 flex items-center justify-center gap-4 text-2xl">
                <a 
                    href="https://www.linkedin.com/in/-daniel-galvez-dev/" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    aria-label="Linkedin"
                >
                    <FaLinkedin />
                </a>
                <a 
                    href="https://github.com/DanielHernandezGalvez" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    aria-label="Github"
                >
                    <FaGithub />
                </a>
                <a 
                    href="mailto:hernandezgalvezalejandro@gmail.com" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    aria-label="Mail"
                >
                    <FaEnvelope />
                </a>
            </div>
        </nav>
    )
}

export default Navbar
