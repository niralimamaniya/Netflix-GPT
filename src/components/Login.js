import { useState } from 'react';
import Header from './Header';

const Login = () => {

    const [isSignIn,setIsSignIn] = useState(true);

    const toggleToSignUpForm = () => {
        setIsSignIn(!isSignIn);
    }

    return (
        <div>
            <Header/>
            <div className="absolute bg-black">
                <img
                    className=''
                    src="https://assets.nflxext.com/ffe/siteui/vlv3/c38a2d52-138e-48a3-ab68-36787ece46b3/eeb03fc9-99c6-438e-824d-32917ce55783/IN-en-20240101-popsignuptwoweeks-perspective_alpha_website_large.jpg"
                    alt="background"
                >
                </img>  
            </div>
            <div className='bg-black bg-opacity-80 absolute top-24 left-1/3 w-1/3 py-14 px-[68px] rounded-md'>
                <form className="flex flex-col gap-4">
                    <span className='text-white text-3xl font-medium mb-5'>
                        {isSignIn ? "Sign In" : "Sign Up"}
                    </span>
                    {!isSignIn && <input
                        type="text"
                        placeholder="Name"
                        className='py-3 px-5 rounded-md bg-zinc-700 focus:outline-none focus:text-white'
                    />
                    }
                    <input 
                        type="text" 
                        placeholder="Email or phone number"
                        className='py-3 px-5 rounded-md bg-zinc-700 focus:outline-none focus:text-white'
                    />
                    <input 
                        type="password" 
                        placeholder="Password"
                        className='py-3 px-5 rounded-md bg-zinc-700 focus:outline-none focus:text-white'
                    />
                    <button 
                        type="submit" 
                        className="mt-6 bg-red-600 text-white p-3 rounded-md font-semibold cursor-pointer"
                    >{isSignIn ? "Sign In" : "Sign Up"}</button>
                    <span className='mt-6 text-gray-500'>{isSignIn? "New to Netflix?" : "Already Registered?"}
                        <span className='pl-1 text-white hover:underline cursor-pointer' onClick={toggleToSignUpForm}>
                            {isSignIn ? "Sign Up Now" : "Sign In Now"}
                        </span>
                    </span>
                </form>
            </div>
        </div>
    )
}

export default Login;