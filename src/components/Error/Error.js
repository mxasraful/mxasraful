import React from 'react';
import { Link } from 'react-router-dom';

const Error = () => {
    return (
        <section style={{padding: '32vh 0'}} className='errorPage bg_dark_blue main-section'>
            <div className="container text-center">
                <h2 style={{display: 'inline'}} className="errorText text-light">
                    Oops <span className='text-danger' style={{fontSize: '100px'}} >404</span> Error
                </h2>
                <br/><br/>
                <Link to='/' className="btn btn-outline-success">Go To Home Page</Link>
            </div>
        </section>
    );
};

export default Error;