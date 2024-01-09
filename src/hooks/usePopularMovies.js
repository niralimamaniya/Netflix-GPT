import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS, POPULAR_MOVIES_API_URL } from "../utils/constants";
import { addPopularMovies } from "../utils/moviesSlice";

const usePopularMovies = () => {
    const dispatch = useDispatch();

    const popularMovies = useSelector((store) => store?.movies.popularMovies);

    const getPopularMovies = async() => {
        const data = await fetch(POPULAR_MOVIES_API_URL, API_OPTIONS );
        const json = await data.json();
        dispatch(addPopularMovies(json.results));
    }

    useEffect(() => {
        !popularMovies && getPopularMovies();
    },[]);
}

export default usePopularMovies;