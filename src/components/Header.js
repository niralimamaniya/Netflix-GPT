import {signOut} from 'firebase/auth';
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Header = () => {

    const navigate = useNavigate();
    const user = useSelector((store) => store.user);
    const handleSignOut = () => {
        signOut(auth).then(() => {
            // Sign-out successful.
            navigate("/");
          }).catch((error) => {
            // An error happened.
          });
    }
    return (
        <div className='flex justify-between items-center mx-4'>
            <div className="">
                <img
                    className="w-[214px]"
                    src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
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