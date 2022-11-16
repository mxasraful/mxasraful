import React from 'react';
import logoImg from "./../../logo/Asraful's_logo_1.png";
import downloadCv from './../../cv/Asrafuls_CV.pdf';
import './Header.css'
import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Header = () => {

    return (
        <header id='headerMain' className='bg_dark_blue'>
            <div className='container'>
                <nav class="navbar navbar-expand-lg navbar-light">
                    <Link class="navbar-brand" to="/"><img style={{ width: '50px' }} src={logoImg} alt="Mx Asraful" /></Link>
                    <button style={{backgroundColor: '#ffffff40'}} class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav mr-auto">
                            <li class="nav-item">
                                <NavLink class="navText" to="/about">About</NavLink>
                            </li>
                            <li class="nav-item">
                                <NavLink class="navText" to="/blog-and-videos">Blog & Videos</NavLink>
                            </li>
                            <li class="nav-item">
                                <NavLink class="navText" to="/portfolio">Portfolio</NavLink>
                            </li>
                            <li class="nav-item">
                                <NavLink class="navText" to="/contact">Contact</NavLink>
                            </li>
                        </ul>
                        <div class="nav_resume" >
                            <a href={downloadCv} download="Asrafuls_CV.pdf" class="btn btn-outline-danger px-4">RESUME</a>
                        </div>
                    </div>
                </nav>
            </div>
        </header>
    );
};

export default Header;