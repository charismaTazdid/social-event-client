import React, { useEffect, useState } from 'react';
import EventCard from '../EventCard/EventCard';
import './Body.css'

const Body = () => {
    const [events, setEvents] = useState([])
    useEffect(() => {
        const url = 'https://dry-escarpment-32310.herokuapp.com/getEvents';
        fetch(url)
            .then(res => res.json())
            .then(data => setEvents(data))
    }, []);

    return (

        <div className='bodymain'>
           
            {
                events.map(event => <EventCard event={event} key={event._id}/>)
            }
        </div>


    );
};

export default Body;