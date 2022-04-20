import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';

const SecondaryNav = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    return (
        <div>
            <nav>
                <Link to='/' className='navLogo'>
                    <img src="/logos/logo2.png" className='logo' alt="" /> <span className='logoText'>SERVE</span>
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
                </div>




            </nav>
        </div>
    );
};

export default SecondaryNav;