import { useDispatch } from "react-redux";
import { addUpcomingMovies } from "../utils/moviesSlice";
import { useEffect } from "react";
import { API_OPTIONS, UPCOMING_MOVIES_API_URL } from "../utils/constants";

const useUpcomingMovies = () => {
    const dispatch = useDispatch();

    const getUpcomingMovies = async() => {
        const data = await fetch(UPCOMING_MOVIES_API_URL, API_OPTIONS );
        const json = await data.json();
        dispatch(addUpcomingMovies(json.results));
    }

    useEffect(() => {
        getUpcomingMovies();
    },[]);
}

export default useUpcomingMovies;