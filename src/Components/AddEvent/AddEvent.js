import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import TextareaAutosize from '@mui/material/TextareaAutosize';
import './AddEvent.css';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';

const AddEvent = () => {
  const [imageUrl, setImageUrl] = useState(null);

  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {

    const eventData = {
      name: data.name,
      description: data.description,
      date: data.date,
      imageUrl: imageUrl
    };

    if (imageUrl == null) {
      alert('Upload an Image')
    }
    else {
      fetch('https://dry-escarpment-32310.herokuapp.com/addNewEvent', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(eventData)
      })
        .then(res => res.json())
        .then(data => console.log(data))
    }



  };


  const handleImageUpload = (event) => {
    // console.log(event.target.files[0])
    const imageData = new FormData();
    imageData.set('key', 'f36d4b2fb8aa9248b195d8da55746b16')
    imageData.append('image', event.target.files[0])

    axios.post('https://api.imgbb.com/1/upload', imageData)
      .then(function (response) {
        setImageUrl(response.data.data.display_url);
      })
      .catch(function (error) {
        console.log(error);
      });
  }



  return (
    <div className='addEventDiv'>
      <form onSubmit={handleSubmit(onSubmit)}>

        <div>
          <strong>Event Name:</strong> <br /> <input defaultValue="" placeholder='Your Event' {...register("name")} className='eventName' />
          <br />

          <strong>Description:</strong> <br />  <TextareaAutosize
            aria-label="minimum height"
            minRows={6}
            placeholder="Write a short Description"
            // style={{ width: 200, padding: 20, }}
            {...register("description")}
            className='description'
          />

        </div>
        <div>
          <strong> Event Date: </strong> <br /> <input className='date' type="date" {...register("date")} />
          <br /> <br />
          <br />
          <label htmlFor="file" className='imageLabel'>
            <CloudUploadIcon /> UPLOAD IMAGE
            <input type='file' className='image' onChange={handleImageUpload} id='file' />
          </label>

          <input type="submit" className='formSubmitBtn' />
        </div>

      </form>
    </div>
  );
};

export default AddEvent;