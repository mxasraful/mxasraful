import React from 'react';
import './About.css';
import pImg from './../../img/mx_asraful_2.jpg'

const About = () => {
    return (
        <section  style={{ paddingTop: '150px', marginBottom: '-8px' }} className='bg_dark_blue'>
            <div className="container">
                <h2 style={{ background: '#232a38', display: 'inline-block', paddingRight: '20px' }} className='text-info workHeader'>About Me</h2>
                <div className='sectionTitlesBackLine'></div>
                <br />
                <div className="aboutContent d-flex">
                    <div className="aboutImg aboutS d-flex justify-content-center">
                        <div style={{ marginTop: "20%" }}>
                            <img src={pImg} alt="Mx Asraful" className="" />
                        </div>
                    </div>
                    <div className="aboutText aboutS">
                        <br /><br /><br />
                        <h3 className="text-left text-light">
                            {/* A person who programms professionally and happily. A programmer who stays up to date with technology.  Whose goal is to do good.  */}
                            Hello! <br />
                            <div className='about-main-text'>
                                <h4>I am Asraful Islam. I am known online as MX Asraful. I am a creative programmer, musical artist, and Youtuber. I can create any kind of web application. I do programming professionally and with pleasure. I have over 3 years of experience in web development. And I'm a musical artist. I have a YouTube channel called Mx Asraful where I have all the music. Also I am a tech youtuber. I have a YouTube channel called Tech by Asraful where I publish tech-related videos.</h4>
                                <br />
                                <h4>I also have a digital agency called AsrafulWeb from which we provide all web and graphic based services.</h4>
                                <br />
                                <h4>I am professionally ready to give any service according to my skill.</h4>
                            </div>
                        </h3>
                        <br /><br />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;