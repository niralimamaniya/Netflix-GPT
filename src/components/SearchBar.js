import { IoSearchOutline } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import lang from "../utils/languageConstants";
import { useRef } from "react";
import openai from './../utils/openai';
import { API_OPTIONS, BACKGROUND_IMG } from "../utils/constants";
import { addGptSearchMovies } from "../utils/gptSlice";

const SearchBar = () => {

    const dispatch = useDispatch();

    const langKey = useSelector((store) => store?.language.lang);
    const searchText = useRef(null);

    const searchMovies = async (movie) => {
        const data = await fetch("https://api.themoviedb.org/3/search/movie?query="+movie+"&include_adult=false&page=1",API_OPTIONS);
        const json = await data.json();
        return json.results;
    }

    const handleGptSearchClick = async () => {
        const gptQuery = "Act as a movie recommendation system and suggest some movies for the query :" +searchText.current.value + ". Give indian if mentioned indian give hollywood if mentioned hollywood and etc. Only give me names of 5 movies , comma seperated like the example result given ahead. Example Result : Sholay, Don, Gadar, Life of pi, Padosan";

        const gptResults = await openai.chat.completions.create({
            messages: [{ role: 'user', content: gptQuery }],
            model: 'gpt-3.5-turbo',
        });

        if(!gptResults.choices) return null;

        const gptMovies = gptResults.choices[0].message.content.split(",");

        if(!gptMovies) return null;
        const promiseArray = gptMovies.map((movie) => searchMovies(movie));
        const searchMoviesResults = await Promise.all(promiseArray);

        if(!searchMoviesResults) return null;
        console.log(searchMoviesResults);

        dispatch(addGptSearchMovies({movieNames:gptMovies,movieResults:searchMoviesResults}));
    }

    return (
        <div className="pt-[12%] mx-28 h-screen">
                <div className="text-center">
                    <h1 className="text-5xl text-white font-bold py-2">Let AI be your Movie Guru!</h1>
                    <h1 className="text-xl text-gray-400 py-2">Discover Family-Friendly Flicks for a Perfect Movie Night</h1>
                </div>
                <form className="grid grid-flow-col gap-3 pt-4" onSubmit={(e) => e.preventDefault()}>
                    <input 
                        className="py-4 px-5 col-span-11 rounded-md bg-zinc-700 text-white focus:outline-none focus:text-white"
                        type="text"
                        placeholder={lang[langKey].gptSearchPlaceholder}
                        ref={searchText}
                    />
                    <button 
                        className="bg-red-600 text-white py-2 px-4 rounded-md font-semibold cursor-pointer"
                        onClick={handleGptSearchClick}
                    >{lang[langKey].search}</button>
                </form>
                <p className='text-xs mt-1 text-gray-400'>
                    Note: Movie recommendations powered by GPT are available on request due to paid APIs.
                    <span className='ml-2 text-sm hover:text-gray-200 underline'>Request now</span>
                </p>
            </div>
    )
}
export default SearchBar;