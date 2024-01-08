import { IoSearchOutline } from "react-icons/io5";
import { useSelector } from "react-redux";
import lang from "../utils/languageConstants";

const SearchBar = () => {

    const langKey = useSelector((store) => store?.language.lang);

    return (
        <div className="pt-[12%] mx-28">
                <div className="text-center">
                    <h1 className="text-5xl text-white font-bold py-2">Let AI be your Movie Guru!</h1>
                    <h1 className="text-xl text-gray-400 py-2">Discover Family-Friendly Flicks for a Perfect Movie Night</h1>
                </div>
                <form className="grid grid-flow-col gap-3 pt-4">
                    <input 
                        className="py-4 px-5 col-span-11 rounded-md bg-zinc-700 text-white focus:outline-none focus:text-white"
                        type="text"
                        placeholder={lang[langKey].gptSearchPlaceholder}
                    />
                    <button className="bg-red-600 text-white py-2 px-4 rounded-md font-semibold cursor-pointer">{lang[langKey].search}</button>
                </form>
                <p className='text-xs mt-1 text-gray-400'>
                    Note: Movie recommendations powered by GPT are available on request due to paid APIs.
                    <span className='ml-2 text-sm hover:text-gray-200 underline'>Request now</span>
                </p>
            </div>
    )
}
export default SearchBar;