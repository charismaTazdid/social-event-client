import React, { useContext } from 'react';
import { Navigate, Outlet, useLocation } from 'react-router';
import { UserContext } from '../App';

const PrivetRoute = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    const location = useLocation();

    return (
        <div>
            {
                loggedInUser.email ? <Outlet /> :
                    <Navigate to='login' replace state={{ from: location }} />
            }
        </div>
    );
};

export default PrivetRoute;