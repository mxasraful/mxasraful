import React from 'react';
import logoImg from "./../../logo/Asraful's_logo_1.png";
import downloadCv from './../../cv/Asrafuls_CV.pptx';
import './Header.css'
import { NavLink } from 'react-router-dom';

const Header = () => {

    return (
        <header id='headerMain' className='bg_dark_blue'>
            <div className='container'>
                <nav class="navbar navbar-expand-lg navbar-light">
                    <a class="navbar-brand" href="./../../"><img style={{ width: '50px' }} src={logoImg} alt="Mx Asraful" /></a>
                    <button style={{backgroundColor: '#ffffff40'}} class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav mr-auto">
                            <li class="nav-item">
                                <NavLink class="navText" to="/about">About</NavLink>
                            </li>
                            <li class="nav-item">
                                <NavLink class="navText" to="/blog">Blog</NavLink>
                            </li>
                            <li class="nav-item">
                                <NavLink class="navText" to="/portfolio">Portfolio</NavLink>
                            </li>
                            <li class="nav-item">
                                <NavLink class="navText" to="/contact">Contact</NavLink>
                            </li>
                        </ul>
                        <div class="nav_resume" >
                            <a href={downloadCv} download="Asrafuls_CV.pptx" class="btn btn-outline-danger">RESUME</a>
                        </div>
                    </div>
                </nav>
            </div>
        </header>
    );
};

export default Header;