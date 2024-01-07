import { useSelector } from "react-redux";
import useTrailerVideo from "../hooks/useTrailerVideo";

const VideoBackground = ({movieId}) => {

    useTrailerVideo(movieId);

    const trailerVideo = useSelector((store) => store.movies?.trailerVideo);

    return (
        <div className="">
            <iframe 
                className="w-full aspect-video"
                src={"https://www.youtube.com/embed/"+trailerVideo?.key+"?autoplay=1&controls=0&mute=1"} title="YouTube video player" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                frameBorder="0"
                allowFullScreen
                >
            </iframe>
        </div>
    )
}

export default VideoBackground;