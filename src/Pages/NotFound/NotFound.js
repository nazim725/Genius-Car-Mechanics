import React from 'react';
import { Link } from 'react-router-dom';

import img from '../../images/404.png'

const NotFound = () => {
    return (
        <div>
            <img src={img} alt="" /><br />
            <Link className="mt-4" to="/home"><button className="btn btn-primary">Go Back</button></Link>
        </div>
    );
};

export default NotFound;