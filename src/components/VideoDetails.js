import { IoPlay } from "react-icons/io5";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { MOVIE_IMG_CDN_URL } from "../utils/constants";

const VideoDetails = ({title,description,imageID}) => {


    return (
        <div>
            <div className="flex flex-col pl-20 absolute pt-[16%] bg-gradient-to-r from-black w-full aspect-video">
                <div>
                    <p className="text-3xl font-medium p-2 text-white">{title}</p>
                    <p className="w-2/5 p-2 text-white">{description}</p>
                </div>
                <div className="flex gap-4 p-2">
                    <button className="flex justify-center items-center gap-1 font-semibold px-5 py-2 bg-white hover:opacity-80 rounded-sm">
                        <IoPlay className="w-5 h-5"/>
                        Play
                    </button>
                    <button className="flex justify-center items-center gap-1 text-white font-semibold px-5 py-2 bg-gray-500 hover:opacity-80 rounded-sm">
                        <AiOutlineInfoCircle className="w-5 h-5"/>
                        More info
                    </button>
                </div>
            </div>
        </div>
    )
}

export default VideoDetails;