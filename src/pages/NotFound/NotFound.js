import React from 'react';
import { Link } from 'react-router-dom';
import './notFound.css'

const NotFound = () => {
    return (
        <div>
            <div id="notfound">
                <div className="notfound">
                    <div className="notfound-404">
                        <h1>Oops!</h1>
                        <h2>404 - The Page can't be found</h2>
                    </div>
                    <Link to="/home">Go To Home Page</Link>
                </div>
            </div>
        </div>
    );
};

export default NotFound;