import { BACKGROUND_IMG } from "../utils/constants";
import GptMovieSugesstions from "./GptMovieSugesstions";
import SearchBar from './SearchBar';

const GptSearchPage = () => {
    return (
        <div className="bg-black">
            <SearchBar/>
            <GptMovieSugesstions/>
        </div>
    )
}

export default GptSearchPage;