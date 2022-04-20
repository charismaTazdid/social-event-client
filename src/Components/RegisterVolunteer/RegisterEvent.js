import { Button } from '@mui/material';
import React from 'react';

const RegisterEvent = ({ event: { name, description, date, imageUrl, _id, volunteerName, volunteerEmail } }) => {

    const handleDeleteUser = (id) => {
        //we can use previous delete api(delete by user) for this oparation.
        fetch(`https://dry-escarpment-32310.herokuapp.com/deleteMyEvent/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => console.log(data))
    }

    return (
        <div>
            <table>
                <tr>
                    <td>{name}</td>
                    <td>{date}</td>
                    <td><strong>{volunteerName}</strong></td>
                    <td>{volunteerEmail}</td>
                    <td className='deleteArea'> <Button onClick={() => handleDeleteUser(_id)} variant='contained' color='error' >Delete</Button> </td>
                </tr>
            </table>
        </div>
    );
};

export default RegisterEvent;