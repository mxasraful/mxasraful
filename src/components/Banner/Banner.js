import React from 'react';
import bannerImg from './../../img/asraful_photo_1.jpg';
import './Banner.css';

const Banner = () => {

    return (
        <section id='banner' className='bannerMain bg_dark_blue'>
            <div style={{ display: 'flex' }} className="container bannerMain2">
                <div style={{ width: '90%', margin: '0 auto', marginTop: '60px' }} className="bannerPhoto2">
                    <img style={{ width: '100%' }} src={bannerImg} alt="Mx Asraful" />
                </div><br />
                <div style={{ width: '65%' }} className="bannerText">
                    <br /><br /><br />
                    <h5 className='text-danger'>Hello, I'm</h5><br />
                    <h2 className='text-info bannerName'>Mx Asraful</h2>
                    <div className="bannerSkill text-danger">
                        <span>Entrepreneur</span>
                        <span>Programmer</span>
                    </div>
                    <div className="bannerTxt ">
                        <br />
                        <span style={{ width: '50%', display: 'block' }} className='text-light'>
                            Mx Asraful Is a Entrepreneur. He is also a Programmer. He is the CEO and Founder of AsrafulWeb a digital agency that provides clients with all types of digital business services such as Web Development, Digital Marketing, and others.
                        </span>
                    </div>
                    <div className="bannerSocialLinks">
                        <a target='blank' href="https://github.com/mxasraful" className='bannerSocial bannerSocialGh'>

                        </a>
                        <a target='blank' href="https://codepen.io/mxasraful" className='bannerSocial bannerSocialCp'>

                        </a>
                        <a target='blank' href="https://medium.com/@mxasraful" className='bannerSocial bannerSocialMd'>

                        </a>
                        <a target='blank' href="https://linkedin.com/in/mxasraful/" className='bannerSocial bannerSocialIn'>

                        </a>
                        <a target='blank' href="https://twitter.com/MxAsraful" className='bannerSocial bannerSocialTw'>

                        </a>
                    </div>
                    {/* <div className="bannerSocialBgBorder">
                        
                    </div> */}
                </div>
                <div style={{ width: '35%', marginTop: '60px' }} className="bannerPhoto">
                    <img className="rounded" style={{ width: '100%' }} src={bannerImg} alt="Mx Asraful" />
                </div>
            </div>
        </section>
    );
};

export default Banner;