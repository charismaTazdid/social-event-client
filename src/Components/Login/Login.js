import React, { useContext } from 'react';
import './Login.css';
import GoogleIcon from '@mui/icons-material/Google';
import { Link } from 'react-router-dom';
import { initializeApp } from 'firebase/app';
import firebaseConfig from '../../firebase.config';
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { UserContext } from '../../App';
import { useLocation, useNavigate } from 'react-router';

const Login = () => {
    const navigate = useNavigate();
    const location = useLocation();
    let {from} = location.state || {from: {pathname: '/'} }
    initializeApp(firebaseConfig);
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const provider = new GoogleAuthProvider();

    const handleGoogleSignIn = () => {
        const auth = getAuth();
        signInWithPopup(auth, provider)
            .then(result => {
                // console.log(result.user.email)
                const user = result.user;
                setLoggedInUser(user);
                // console.log(user)
                navigate(from)
            })
            .catch(error => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode, errorMessage)
            })

    };
    const handleSignOut = () => {
        setLoggedInUser({})
    }

    return (

        <div className="loginMain">
            <Link to='/' className='logo-login navLogo'>
                <img src="/logos/logo2.png" className='logo' alt="" /> <span className='logoText'>SERVE</span>
            </Link>
            <div className='loginDiv' >

                {
                    loggedInUser.email ? <h3 className='logutText'>You want to Log out?</h3>
                        :
                        <h3 className='loginText'> want to Login?</h3>
                }
                {
                    loggedInUser.email ?
                        <>
                            <button className='logoutBtn' onClick={handleSignOut}>
                                <span > Click here to Log out </span>
                            </button>
                            <Link to='/'><strong>go to home page </strong></Link>
                        </>
                        :
                        <button className='loginBtn' onClick={handleGoogleSignIn}>
                            <GoogleIcon color='warning' fontSize='large'> </GoogleIcon>  <span> Login with google</span>
                        </button>
                }


                {
                    loggedInUser.email ? <p> </p> : <p>Don't have an account?<Link to='/'> Create an account</Link> </p>
                }
            </div>

        </div>
    );
};

export default Login;