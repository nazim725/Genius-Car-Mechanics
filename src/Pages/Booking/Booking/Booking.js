import React, {useState, useEffect } from 'react';
import { useParams } from 'react-router';
import Service from './../../Home/Service/Service';

const Booking = () => {
const {serviceId}=useParams()

    


    return (
        <div>

            <h2>This is Booking {serviceId}</h2>
        </div>
    );
};

export default Booking;