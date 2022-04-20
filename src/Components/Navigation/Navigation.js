import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';
import './Navigation.css'

const Navigation = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    return (

        <>
            <div className='main'>


                <nav>

                    <Link to='/' className='navLogo'>
                        <img src="/logos/logo2.png" className='logo' alt="" /> <p className='logoText'>SERVE</p>
                    </Link>


                    <div className='middle'>
                        <Link to='/'> Home </Link>
                        <Link to='/donation'> Donation </Link>
                        <Link to='/events'>My Events </Link>
                    </div>

                    <div className='rightMenu'>
                        {
                            loggedInUser.email ? <Link to='/login' className='rgisterBtn'> LogOut </Link> 
                            :
                            <Link to='/login' className='rgisterBtn' > Login </Link>
                        }
                        <Link to='/admin' className='adminBtn'> Admin </Link>

                    </div>


                </nav>

                <div className="searchField">
                    <h2>Part of being a person is about helping others...</h2>
                    <input type="text" placeholder='Search' /><button>Search</button>
                </div>


            </div>
      
        </>
    );
};

export default Navigation;