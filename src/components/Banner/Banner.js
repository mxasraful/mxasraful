import React from 'react';
import bannerImg from './../../img/Asrafuls_phopto.png';
import './Banner.css';

const Banner = () => {

    return (
        <section id='banner' className='bannerMain bg_dark_blue'>
            <div style={{ display: 'flex' }} className="container bannerMain2">
                <div style={{ width: '90%', margin: '0 auto', marginTop: '60px' }} className="bannerPhoto2">
                    <img style={{ width: '100%' }} src={bannerImg} alt="Mx Asraful" />
                </div><br/>
                <div style={{ width: '65%' }} className="bannerText">
                    <br /><br /><br />
                    <h5 className='text-danger'>Hello, I'm</h5><br />
                    <h2 className='text-info bannerName'>Asraful Islam</h2>
                    <div className="bannerSkill text-danger">
                        <span>Programmer</span>
                        <span>Web Developer</span>
                    </div>
                    <div className="bannerTxt">
                        <br />
                        <span style={{ width: '44%', display: 'block' }} className='text-light'>A person who programms professionally and happily. A programmer who stays up to date with technology. Whose goal is to do good.</span>
                    </div>
                    <div className="bannerSocialLinks">
                        <a target='blank' href="https://github.com/mxasraful" className='bannerSocial bannerSocialGh'></a>
                        <a target='blank' href="https://codepen.io/mxasraful" className='bannerSocial bannerSocialCp'></a>
                        <a target='blank' href="https://medium.com/@mxasraful" className='bannerSocial bannerSocialMd'></a>
                        <a target='blank' href="https://linkedin.com/in/mxasraful/" className='bannerSocial bannerSocialIn'></a>
                        <a target='blank' href="https://twitter.com/MxAsraful" className='bannerSocial bannerSocialTw'></a>
                    </div>
                    {/* <div className="bannerSocialBgBorder">
                        
                    </div> */}
                </div>
                <div style={{ width: '35%', marginTop: '60px' }} className="bannerPhoto">
                    <img style={{ width: '100%' }} src={bannerImg} alt="Mx Asraful" />
                </div>
            </div>
        </section>
    );
};

export default Banner;