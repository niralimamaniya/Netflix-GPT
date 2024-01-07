import Header from "./Header";
import useNowPlayingMovies from './../hooks/useNowPlayingMovies';
import MainVideoContainer from "./MainVideoContainer";
import SecondaryVideoContainer from "./SecondaryVideoContainer";

const Browse = () => {

    useNowPlayingMovies();

    return (
        <div>
            <div className="bg-gradient-to-b from-black absolute w-full z-[1]">
                <Header/>
                
            </div>
            <MainVideoContainer/>
            <SecondaryVideoContainer/>
        </div>
    )
}

export default Browse;