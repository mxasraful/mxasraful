import React from 'react';
import { Link } from 'react-router-dom';

const Error = () => {
    return (
        <section style={{paddingTop: '117px'}} className='errorPage bg_dark_blue'>
            <div className="container text-center">
                <br/><br/><br/><br/><br/>
                <h2 style={{display: 'inline'}} className="errorText text-light">
                    Oops <span className='text-danger' style={{fontSize: '100px'}} >404</span> Error
                </h2>
                <br/><br/>
                <Link to='/' className="btn btn-outline-success">Go To Home Page</Link>
                <br/><br/><br/><br/><br/><br/><br/>
            </div>
        </section>
    );
};

export default Error;