import { useSelector } from "react-redux";

const SecondaryVideoContainer = () => {

    const movies = useSelector((store) => store.movies?.nowPlayingMovies);

    return (
        <div>
            SecondaryVideoContainer
        </div>
    )
}

export default SecondaryVideoContainer;