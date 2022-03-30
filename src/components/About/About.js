import React from 'react';
import './About.css';
import pImg from './../../img/mx_asraful_2.jpg'

const About = () => {
    return (
        <section style={{ paddingTop: '110px', paddingBottom: '40px' }} className='bg_dark_blue'>
            <div className="container">
                <div className="row">
                    <h2 className="pageTitle text-info">About Me</h2>
                    <div style={{ marginTop: "50px" }} class="sectionTitlesBackLine"></div>
                    <br /><br />
                    <div className="aboutContent">
                        <div className="aboutImg aboutS">
                            <img src={pImg} alt="Mx Asraful" className="" />
                        </div>
                        <div className="aboutText aboutS">
                            <br /><br /><br />
                            <h3 style={{ width: '500px', margin: '0 auto' }} className="text-left text-light">
                                {/* A person who programms professionally and happily. A programmer who stays up to date with technology.  Whose goal is to do good.  */}
                            Hello! <br />
                                <h4>I am Asraful Islam. I am known online as MX Asraful. I am a creative programmer. I can create any kind of web application. I do programming professionally and with pleasure. I have over 3 years of experience in web development. I love programming. I am always ready to create a web application for my interests.</h4>
                            </h3>
                            <br /><br />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;