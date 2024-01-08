import MovieCard from "./MovieCard"

const MoviesList = ({title,moviesList}) => {

    return (
        <div className="text-white">
            <div className="px-14 py-2">
            <h1 className="text-lg font-semibold pb-2 pl-1">{title}</h1>
                <div className="overflow-x-scroll no-scrollbar">
                    <div className="flex gap-6">
                        {moviesList?.map((movie) => 
                            <MovieCard key={movie?.id} imageId = {movie?.poster_path}/>
                        )}
                        {/* <MovieCard imageId = {moviesList[0].poster_path}/> */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MoviesList