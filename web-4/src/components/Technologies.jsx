import { FaNodeJs } from "react-icons/fa"
import {RiReactjsLine} from "react-icons/ri"
import {TbBrandNextjs} from "react-icons/tb"
import {SiJavascript, SiMongodb, SiTypescript} from "react-icons/si"

const Technologies = () => {
    return (
        <div className="pb-24">
            <h2 className="my-20 text-center text-4xl">Technologies</h2>
            <div className="flex flex-wrap items-center justify-center gap-4">
                <div>
                    <SiJavascript className="text-7xl text-yellow-300" />
                </div>
                <div>
                    <RiReactjsLine className="text-7xl text-cyan-400" />
                </div>
                <div>
                    <TbBrandNextjs className="text-7xl" />
                </div>
                <div>
                    <FaNodeJs className="text-7xl text-green-500" />
                </div>
                <div>
                    <SiMongodb className="text-7xl text-green-700" />
                </div>
                <div>
                    <SiTypescript className="text-7xl text-blue-600" />
                </div>
            </div>
        </div>
    )
}

export default Technologies
