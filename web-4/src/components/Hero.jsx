import profilepic from "../assets/raviKumarProfile.webp"
import { HERO_CONTENT } from "../constants/index"

const Hero = () => {
    return (
        <div className="pb-4 lg:md-36">
            <div className="flex flex-wrap lg:flex-row-reverse">
                <div className="w-full lg:w-1/2">
                    <div className="flex justify-center lg:p-8">
                        <img
                            src={profilepic}
                            alt="Daniel Gálvez"
                            className="border border-stone-900 rounded-3xl"
                        />
                    </div>
                </div>
                <div className="w-full lg:w-1/2">
                    <div className="flex flex-col items-center lg:items-start mt-10">
                        <h2 className="pb2 text-4xl tracking-tighter">Daniel Gálvez</h2>
                        <span className="bg-gradient-to-r from-stone-300 to-stone-600 
                            bg-clip-text text-3xl tracking-tigth text-transparent"
                        >Frontend Developer
                        </span>
                        <p className="my-2 max-w-lg py-6 text-xl leading-relaxed tricking-tighter"
                        >{HERO_CONTENT}</p>
                        <a
                            href="/resume.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            download
                            className="bg-white rounded-full p-4 text-sm text-stone-800 mb-10"
                        > Download Resume
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero
