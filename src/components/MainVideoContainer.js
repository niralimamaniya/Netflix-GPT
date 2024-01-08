import { useSelector } from "react-redux";
import VideoBackground from "./VideoBackground";
import VideoDetails from "./VideoDetails";

const MainVideoContainer = () => {

    const movies = useSelector((store) => store.movies?.nowPlayingMovies);

    if(!movies) return;

    const mainMovie = movies[0];

    const {original_title, overview , id, poster_path } = mainMovie;

    return (
        <div className="">
            <VideoDetails title={original_title} description={overview} imageID={poster_path}/>
            <VideoBackground movieId={id}/>
            {/* <img src={mainMovie?.poster_path} alt="movie-logo"></img> */}
        </div>
    )
}

export default MainVideoContainer;