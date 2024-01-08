import { MOVIE_IMG_CDN_URL } from "../utils/constants";

const MovieCard = ({imageId}) => {
    if(!imageId) return null;
    return (
        <div  className="">
            <div className="w-40 cursor-pointer">
                <img 
                    className="rounded-sm"
                    src={MOVIE_IMG_CDN_URL + imageId} 
                    alt="movie-poster">
                </img>
            </div>
        </div>
    )
}

export default MovieCard;