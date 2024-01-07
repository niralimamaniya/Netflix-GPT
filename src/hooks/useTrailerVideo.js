import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addTrailerVideo } from "../utils/moviesSlice";
import { useEffect } from "react";

const useTrailerVideo = (movieId) => {
    const dispatch = useDispatch();

    const getMainMovieVideo = async () => {
        const data = await fetch("https://api.themoviedb.org/3/movie/"+movieId+"/videos",API_OPTIONS);
        const json = await data.json();

        const trailerData = json.results.filter((video) => video.type === "Trailer");
        const trailer = trailerData.length ? trailerData[0] : json.results[0];
        dispatch(addTrailerVideo(trailer));
    }

    useEffect(()=>{
        getMainMovieVideo();
    },[]);
}

export default useTrailerVideo;