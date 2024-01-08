import { useDispatch } from "react-redux";
import { addNowPlayingMovies } from "../utils/moviesSlice";
import { useEffect } from "react";
import { API_OPTIONS, NOW_PLAYING_MOVIES_API_URL } from "../utils/constants";

const useNowPlayingMovies = () => {
    const dispatch = useDispatch();

    const getNowPlayingMovies = async() => {
        const data = await fetch(NOW_PLAYING_MOVIES_API_URL, API_OPTIONS );
        const json = await data.json();
        dispatch(addNowPlayingMovies(json.results));
    }

    useEffect(() => {
        getNowPlayingMovies();
    },[]);
}

export default useNowPlayingMovies;