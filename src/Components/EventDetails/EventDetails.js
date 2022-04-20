import React, { useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router';
import { UserContext } from '../../App';
import './EventDetails.css'
const EventDetails = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [eventById, setEventById] = useState({});
    const [success, setSuccess] = useState(false);
    const [isJoined, setIsJoined] = useState(false);
    const navigate = useNavigate();


    const { eventId } = useParams();
    useEffect(() => {
        fetch(`https://dry-escarpment-32310.herokuapp.com/getSingleEvent/${eventId}`)
            .then(res => res.json())
            .then(data => setEventById(data[0]))
    }, [eventId]);

    const handleJoinEvent = (id) => {
        const joinEventInfo = {
            name: eventById.name,
            description: eventById.description,
            date: eventById.date,
            imageUrl: eventById.imageUrl,
            volunteerName: loggedInUser.displayName,
            volunteerEmail: loggedInUser.email,
        };
        if (loggedInUser.email) {
            fetch('https://dry-escarpment-32310.herokuapp.com/registerEvent', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(joinEventInfo)
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                })
            setSuccess(true)
            setIsJoined(true)


        }
        else {
            alert("please Login first")
            navigate('/login')

        }


    };

    const handleRedirect = () => {
        navigate('/events')
    };

    return (
        <div className='detailEvent'>
            {
                success && <div className='successMessage'>
                    <div >
                        <p>Successfully registerd for a Event </p>
                        <p className='cancleBtn' onClick={() => setSuccess(!success)}> X </p>
                    </div>
                </div>
            }

            <div className="eventDetailDiv">


                <div className='eventDetails'>
                    <div>
                        <img src={eventById.imageUrl} className='eventImg' alt="" />
                    </div>
                    <div className='eventInfo'>
                        <h4> Event: {eventById.name}</h4>
                        <p><strong> About: </strong>{eventById.description}  </p>
                        <p>Date: {eventById.date}</p>

                        {

                            isJoined ? <>
                                <button type="button" disabled className='disableBtn'> Cancle </button> <button className='joinBtn' onClick={handleRedirect}>
                                    Go to your Event section
                                </button>
                                {/* <Link to='/events' className='joinBtn' >
                                    Go to your Event section
                                </Link> */}
                            </>

                                :

                                <button onClick={() => handleJoinEvent(eventById._id)} className='joinBtn' >Join this Event</button>
                        }

                    </div>

                </div>
            </div>
        </div>
    );
};

export default EventDetails;