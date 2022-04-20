import React, { useEffect, useState } from 'react';
import RegisterEvent from './RegisterEvent';
import './RegisterVolunteer.css'
const RegisterVolunteer = () => {
    const [allRegisterEvent, setAllRegisterEvent] = useState([]);

    useEffect(() => {
        //this oparation and our Delete event by user oparation quite similer, that's why we don't need to make a saparate API for this oparation, we can re-use that
        const url = 'https://dry-escarpment-32310.herokuapp.com/getAllRegisterEvent'
        fetch(url)
            .then(res => res.json())
            .then(data => setAllRegisterEvent(data))
    }, [allRegisterEvent]);

    return (
        <div className='registerVolunteer'>
            <table>
		<caption> <h3> All Registerd Volunteeer </h3></caption>
		<tr>
			<th>Event Name</th>
			<th>Event Date</th>
			<th>Volunteer Name</th>
			<th>Volunteer Email</th>
			<th className='deleteArea'>Delete User</th>
		</tr>
        </table>
          {
              allRegisterEvent.map(event => <RegisterEvent event={event}> </RegisterEvent>)
          }



        </div>
    );
};

export default RegisterVolunteer;