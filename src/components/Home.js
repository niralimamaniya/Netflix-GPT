import { Link } from "react-router-dom";
import Header from "./Header";

const Home = () => {
    return (
        <div>  
            <div className="absolute z-[1] w-full">
                <div className="flex justify-between items-center mx-32">
                    <Header/>
                    <div className="flex gap-5 mx-4 py-1">
                        <span className="text-white font-semibold">English</span>
                        <Link to='/login'>
                            <button className="bg-red-600 text-white py-1 px-4 rounded-md font-semibold cursor-pointer">
                                Sign In
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="bg-black">
                <img
                    className='opacity-35'
                    src="https://assets.nflxext.com/ffe/siteui/vlv3/c38a2d52-138e-48a3-ab68-36787ece46b3/eeb03fc9-99c6-438e-824d-32917ce55783/IN-en-20240101-popsignuptwoweeks-perspective_alpha_website_large.jpg"
                    alt="background"
                ></img>  
                <div className="absolute top-72 left-60">
                    <div className="flex flex-col justify-center items-center gap-y-6 text-white">
                        <h1 className="font-extrabold text-5xl">Unlimited movies, TV shows and more</h1>
                        <p className="text-2xl">Watch anywhere. Cancel anytime.</p>
                        <p className="text-2xl">Ready to watch? Not signed up yet?</p>
                    </div>
                </div>
            </div>  
            <hr className="border-zinc-500 border-b-8"></hr>
            <div className="bg-black h-[450px] text-white">
                <div className="flex justify-center items-center gap-x-20 p-10 w-full">
                    <div className="w-1/3">
                        <p className="text-5xl font-extrabold ">Enjoy on your TV</p>
                        <p className="text-2xl">Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.</p>
                    </div>
                    <div className="w-1/3 flex justify-center items-center ">
                        <img 
                            className="w-96"
                            src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg" 
                            alt="img"
                        >
                        </img>
                    </div>
                </div>
            </div>
            <hr className="border-zinc-500 border-b-8"></hr>
            <div className="bg-black h-[450px] text-white">
                <div className="flex justify-center items-center gap-x-20 p-10 w-full">
                    <div className="w-1/3">
                        <p className="text-5xl font-extrabold ">Enjoy on your TV</p>
                        <p className="text-2xl">Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.</p>
                    </div>
                    <div className="w-1/3 flex justify-center items-center ">
                        <img 
                            className="w-96"
                            src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg" 
                            alt="img"
                        >
                        </img>
                    </div>
                </div>
            </div>
        </div>
        
    )
}

export default Home;