import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../App';
import EventCard from '../EventCard/EventCard';
import MySingleEvent from './MySingleEvent';

const Events = () => {
    const [myEvents, setMyEvents] = useState([]);
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    useEffect(() => {
        fetch('https://dry-escarpment-32310.herokuapp.com/getRegisterEvent?email='+loggedInUser.email, {
            method: 'GET',
            headers: {
                'Content-Type' : 'application/json',
            }
        })
            .then(res => res.json())
            .then(data => setMyEvents(data))
    }, [myEvents]);

    return (
        <>
        <p style={{textAlign: 'center'}}><strong >Here is your all selected Event</strong></p>
        <div className='flexContainer'>
            
            {
                myEvents.map(event => <MySingleEvent event={event}> </MySingleEvent>)
            }
        </div>
        </>
    );
};

export default Events;