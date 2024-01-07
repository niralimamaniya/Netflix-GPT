import {onAuthStateChanged, signOut} from 'firebase/auth';
import { auth } from '../utils/firebase';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { addUser, removeUser } from '../utils/userSlice';
import { NETFLIX_LOGO } from '../utils/constants';

const Header = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const user = useSelector((store) => store.user);
    const handleSignOut = () => {
        signOut(auth).then(() => {
            // Sign-out successful.
          }).catch((error) => {
            // An error happened.
          });
    }

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                // User is signed up / signed in
                const {uid, email , displayName, photoURL} = user;
                dispatch(
                    addUser({
                        uid:uid,
                        email:email,
                        displayName:displayName,
                        photoURL:photoURL
                    })
                )
                navigate("/browse");
            } else {
                // User is signed out
                dispatch(removeUser());   
                navigate("/login");
            }
          });

        return () => unsubscribe();
    },[]);

    return (
        <div className='flex justify-between items-center mx-4'>
            <div className="">
                <img
                    className="w-[214px]"
                    src={NETFLIX_LOGO}
                    alt="logo"
                >
                </img>
            </div>
            {user && 
            <div className='flex gap-3'>
                <img 
                    className='w-9 h-9 rounded-sm'
                    src={user?.photoURL}
                    alt="user-logo">
                </img>
                <button 
                    className="bg-red-600 text-white py-2 px-4 rounded-md font-semibold cursor-pointer"
                    onClick={handleSignOut}
                >Sign Out</button>
            </div>}
        </div>
    )
}

export default Header;