import { useSelector } from "react-redux";
import MovieCard from "./MovieCard";
import MoviesList from "./MoviesList";

const GptMovieSugesstions = () => {
    const {movieNames,movieResults} = useSelector((store) => store.gpt);
    if(!movieNames) return null;
    return (
        <div className="bg-zinc-950 bg-opacity-70">
            <div className="relative -mt-48 text-white p-4 mx-4">
                {movieNames.map((movie,index)=>
                    <MoviesList 
                        key={movie}
                        title={movie} 
                        moviesList={movieResults[index]}
                    />
                )}     
            </div>
        </div>
    )
}

export default GptMovieSugesstions;