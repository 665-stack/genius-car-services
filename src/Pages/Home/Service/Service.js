import React from 'react';
import './Service.css'
const Service = ({ service }) => {
    const { name, img, description, price } = service;
    return (
        <div className='service mt-3'>
            <img className='w-100' src={img} alt="" />
            <h2>{name}</h2>
            <p>Price: {price}</p>
            <p><small>{description}</small></p>
            <button className=' border-0 btn-primary py-2 px-4 rounded-3'>Book: {name}</button>
        </div>
    );
};

export default Service;