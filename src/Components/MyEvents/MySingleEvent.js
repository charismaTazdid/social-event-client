import { Button } from '@mui/material';
import React from 'react';
import './MySingleEvent.css'


const MySingleEvent = ({ event: { name, description, date, imageUrl, _id, volunteerName } }) => {

    const handleDleteEvent = (id) => {
        fetch(`https://dry-escarpment-32310.herokuapp.com/deleteMyEvent/${id}`, {
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(data => console.log(data))

    };

    return (

    
            <div className='singleEvent'>
            <div>
                <p> Event date: {date} </p>
            </div>
            <div>
                <img src={imageUrl} alt={'pic'} />
            </div>
            <div>
                <span>{description}  </span>
                <h3>{name} </h3>
                <h3>Volunteer: {volunteerName} </h3>
               <Button onClick={()=> handleDleteEvent(_id)} variant="contained" color='warning' className='deleteBtn'> Cancle This Event</Button>
            </div>
        </div>



    );
};

export default MySingleEvent;