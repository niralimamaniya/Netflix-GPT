import GptMovieSugesstions from "./GptMovieSugesstions";
import SearchBar from './SearchBar';

const GptSearchPage = () => {
    return (
        <div className="bg-black h-screen">
            <SearchBar/>
            <GptMovieSugesstions/>
        </div>
    )
}

export default GptSearchPage;