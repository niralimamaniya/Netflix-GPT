import Header from "./Header";
import useNowPlayingMovies from './../hooks/useNowPlayingMovies';
import MainVideoContainer from "./MainVideoContainer";
import SecondaryVideoContainer from "./SecondaryVideoContainer";
import usePopularMovies from "../hooks/usePopularMovies";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import useUpcomingMovies from "../hooks/useUpcomingMovies";

const Browse = () => {

    useNowPlayingMovies();
    usePopularMovies();
    useTopRatedMovies();
    useUpcomingMovies();

    return (
        <div>
            <div className="bg-gradient-to-t from-black absolute w-full z-[1]">
                <Header/> 
            </div>
            <MainVideoContainer/>
            <SecondaryVideoContainer/>
        </div>
    )
}

export default Browse;