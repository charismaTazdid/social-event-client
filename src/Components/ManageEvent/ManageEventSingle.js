import { Button } from '@mui/material';
import React from 'react';
import './ManageEvent.css'

const ManageEventSingle = ({ event: { name, description, imageUrl, date, _id, volunteerName, volunteerEmail } }) => {

    const handleDeletEvent = (id) => {
        const url = `https://dry-escarpment-32310.herokuapp.com/deleteEvent/${id}`
        fetch(url, {
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(data => console.log(data))
    };

    return (
        <div>
            <table>
                <tr>
                    <td> <strong>{name}</strong> </td>
                    <td>{description}</td>
                    <td> <img src={imageUrl} alt="" /> </td>
                    <td><strong>{date}</strong></td>
                    <td className='deleteArea'> <Button onClick={() => handleDeletEvent(_id)} variant='contained' color='error' >Delete</Button> </td>
                </tr>
            </table>
        </div>
    );
};

export default ManageEventSingle;