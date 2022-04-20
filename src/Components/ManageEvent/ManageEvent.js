import React, { useEffect, useState } from 'react';
import './ManageEvent.css'
import ManageEventSingle from './ManageEventSingle';

const ManageEvent = () => {
    const [existingEvent, setExistingEvent] = useState([]);

    useEffect(() => {
        //we don't need create a new api to get all the existing evnent in our database, couse allrady we create an api to get all data for home page, in that case we can use this
        const url = 'https://dry-escarpment-32310.herokuapp.com/getEvents';
        fetch(url)
            .then(res => res.json())
            .then(data => setExistingEvent(data))
    }, [existingEvent]);

    return (
        <div>
            <table>
                <caption> <h3> All Event</h3></caption>
                <tr>
                    <th>Event Name</th>
                    <th>Event Description</th>
                    <th>Event Image</th>
                    <th>Event Date</th>
                    <th className='deleteArea'>Delete This Event</th>
                </tr>
            </table>
            {
                existingEvent.map(event => <ManageEventSingle event={event} key={event._id}> </ManageEventSingle>)
            }
        </div>
    );
};

export default ManageEvent;