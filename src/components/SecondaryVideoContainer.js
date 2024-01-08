import { useSelector } from "react-redux";
import MoviesList from "./MoviesList";

const SecondaryVideoContainer = () => {

    const movies = useSelector((store) => store.movies);

    return (
        movies?.nowPlayingMovies && 
        <div className="bg-black">
        <div className="-mt-52 relative z-20 ">
            <MoviesList title={"Now Playing"} moviesList={movies?.nowPlayingMovies}/>
            <MoviesList title={"Popular"} moviesList={movies?.popularMovies}/>
            <MoviesList title={"Top Rated"} moviesList={movies?.topRatedMovies}/>
            <MoviesList title={"Upcoming"} moviesList={movies?.upcomingMovies}/>
        </div>
        </div>
    )
}

export default SecondaryVideoContainer;