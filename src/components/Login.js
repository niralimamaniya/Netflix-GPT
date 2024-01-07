import { useRef, useState } from 'react';
import Header from './Header';
import {isDataValid} from '../utils/validate';
import {createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile} from 'firebase/auth';
import { auth } from '../utils/firebase';
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';

const Login = () => {

    const dispatch = useDispatch();

    const [isSignIn,setIsSignIn] = useState(true);
    const [errorMessage, setErrorMessage] = useState("");
    const email = useRef(null);
    const password = useRef(null);
    const name = useRef(null);
    
    const handleValidation = () => {
        
        const message = isDataValid(email.current.value,password.current.value);
        setErrorMessage(message);

        if(message) return;

        if(!isSignIn){
            // Sign Up
            createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
                .then((userCredential) => {
                    // Signed up 
                    const user = userCredential.user;
                    console.log(user);
                    updateProfile(user, {
                        displayName: name.current.value, photoURL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSu9VhASGSfFj_77fZ748zUwZZ0HbLv35YYrd93apRFEjDlRDUcoBJlyiiLfzxymVaJMp0&usqp=CAU"
                      }).then(() => {
                        // Profile updated!
                        const {uid, email , displayName, photoURL} = auth.currentUser;
                        dispatch(
                            addUser({
                                uid:uid,
                                email:email,
                                displayName:displayName,
                                photoURL:photoURL
                            })
                        )
                      }).catch((error) => {
                        // An error occurred
                        setErrorMessage(error.message);
                      });
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setErrorMessage(errorCode+": "+errorMessage);
                });
        } else {
            // Sign In
            signInWithEmailAndPassword(auth, email.current.value, password.current.value)
                .then((userCredential) => {
                    // Signed in 
                    const user = userCredential.user;
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setErrorMessage(errorCode+": "+errorMessage);
                });
        }
    }

    const toggleToSignUpForm = () => {
        setIsSignIn(!isSignIn);
    }

    return (
        <div>
            <div className='absolute z-[1]'>
            <Header/>
            </div>
            <div className="absolute bg-black">
                <img
                    className='opacity-35'
                    src="https://assets.nflxext.com/ffe/siteui/vlv3/c38a2d52-138e-48a3-ab68-36787ece46b3/eeb03fc9-99c6-438e-824d-32917ce55783/IN-en-20240101-popsignuptwoweeks-perspective_alpha_website_large.jpg"
                    alt="background"
                >
                </img>  
            </div>
            <div className='bg-black bg-opacity-70 absolute top-24 left-1/3 w-1/3 py-14 px-[68px] rounded-md'>
                <form className="flex flex-col gap-4" onSubmit={(e) => e.preventDefault()}>
                    <span className='text-white text-3xl font-medium mb-5'>
                        {isSignIn ? "Sign In" : "Sign Up"}
                    </span>
                    {!isSignIn && <input
                        ref={name}
                        type="text"
                        placeholder="Name"
                        className='py-3 px-5 rounded-md bg-zinc-700 text-white focus:outline-none focus:text-white'
                    />
                    }   
                    <input 
                        ref={email}
                        type="text" 
                        placeholder="Email or phone number"
                        className='py-3 px-5 rounded-md bg-zinc-700 text-white focus:outline-none focus:text-white'
                    />
                    <input 
                        ref={password}
                        type="password" 
                        placeholder="Password"
                        className='py-3 px-5 rounded-md bg-zinc-700 text-white focus:outline-none focus:text-white'
                    />
                    <p className='text-orange-500'>{errorMessage}</p>
                    <button 
                        type="submit" 
                        className="mt-6 bg-red-600 text-white p-3 rounded-md font-semibold cursor-pointer"
                        onClick={handleValidation}
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