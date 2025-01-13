import logo from "../assets/raviKumarLogo.webp"
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
                    href="https//linkedin.com" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    aria-label="Linkedin"
                >
                    <FaLinkedin />
                </a>
                <a 
                    href="https//github.com" 
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
