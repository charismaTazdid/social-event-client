import React from 'react';
import { Link } from 'react-router-dom';
import './EventCard.css'

const EventCard = ({ event: { name, description, date, imageUrl, _id } }) => {
    return (
        <Link to={'/eventDetail/'+_id}>
        <div className='eventCard'>
            <div>
                <p> Event date: {date} </p>
            </div>
            <div>
                <img src={imageUrl} alt={'pic'} />
            </div>
            <div>
                <span>{description}  </span>
                <h3>{name} </h3>
            </div>
        </div>
        </Link> 

    );
};

export default EventCard;