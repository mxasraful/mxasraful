import React, { useState } from 'react';
import { Button, TextField } from '@material-ui/core';
import './Contact.css'

const Contact = () => {

    const [msgSendSuccess, setMsgSendSuccess] = useState(false)

    const [msgName, setMsgName] = useState("")
    const [msgEmail, setMsgEmail] = useState("")
    const [msgText, setMsgText] = useState("")

    // get users messaging Date
    const dateYear = new Date().getFullYear()
    const dateMonth = new Date().getMonth()
    const dateDay = new Date().getDate()
    const msgDate = `${dateDay} / ${dateMonth} / ${dateYear} `

    // get users messaging Time
    const timeHours = new Date().getHours()
    const timeMinutes = new Date().getMinutes()
    const timeSeconds = new Date().getSeconds()
    const msgTime = `${timeHours}: ${timeMinutes}: ${timeSeconds}`

    const sendMsg = (e) => {
        fetch('https://serene-peak-05996.herokuapp.com/messageSend', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                name: msgName,
                email: msgEmail,
                message: msgText,
                date: msgDate,
                dateYear: dateYear,
                dateMonth: dateMonth,
                dateDay: dateDay,
                time: msgTime,
                timeHours: timeHours,
                timeMinutes: timeMinutes,
                timeSeconds: timeSeconds,
            })
        })
            .then(res => {
                setMsgSendSuccess(true)
            })
        e.preventDefault()
        e.target.reset()
    }


    return (
        <section style={{ paddingTop: '150px' }} className='contactMain bg_dark_blue'>
            <div className="container">
                <div className="row">
                    <br /><br /><br />
                    <h2 className="pageTitle text-info">Contact Us</h2>
                    <div class="sectionTitlesBackLine"></div>
                    <div className="contactSectionMain">
                        <form className='contactForm' onSubmit={sendMsg} noValidate autoComplete="off">
                            <h3 className='text-center text-light'>Send me a Message</h3>
                            <br />
                            {
                                msgSendSuccess ?
                                    <div style={{ background: 'green' }} className="card card-success">
                                        <div className="card-body">
                                            <h5>Message Send Successful.</h5>
                                        </div>
                                    </div> : ''
                            }
                            <br />
                            <TextField
                                onChange={(e) => setMsgName(e.target.value)}
                                className='text-light contactInputBox'
                                id="filled-basic"
                                label="Your Name"
                                variant="filled"
                                color='secondary'
                                type='name'
                                required
                            />
                            <TextField
                                onChange={(e) => setMsgEmail(e.target.value)}
                                className='text-light contactInputBox'
                                id="filled-basic"
                                label="Your Email"
                                variant="filled"
                                color='secondary'
                                type='email'
                                required
                            />
                            <TextField
                                onChange={(e) => setMsgText(e.target.value)}
                                className='text-light contactInputBox'
                                id="filled-basic" label="Your Message"
                                multiline
                                rows={4}
                                variant="filled"
                                color='secondary'
                                type='message'
                                required
                            />
                            <Button type='submit' variant="contained" color="secondary">SEND MESSAGE</Button>
                        </form>
                        <div className="col-2 contactSpace"></div>
                        <div className="contactInfo">
                            <h3 style={{marginTop: "100px", color: "#ffff"}}>Get In Touch</h3>
                            <hr />
                            <div className="text-light">
                                <span className=''>Email:</span><br />
                                <a className="text-light" href="mailto: mxasraful@outlook.com">mxasraful@outlook.com</a>
                            </div>
                            <div className="text-light">
                                <span className=''>Phone:</span><br />
                                <a className="text-light" href="tel: +8801821892715">+880 1821-892715</a>
                            </div>
                            <div style={{ width: '250px' }} className="text-light">
                                <span className=''>Social:</span><br />
                                <a target='blank' className='btn btn-outline-danger btn-sm contactSocialBtn' href='https://fb.com/asrafulfb'>Facebook</a>
                                <a target='blank' className='btn btn-outline-danger btn-sm contactSocialBtn' href='https://twitter.com/mxasraful'>Twitter</a>
                                <a target='blank' className='btn btn-outline-danger btn-sm contactSocialBtn' href='https://linkedin.com/in/mxasraful'>LinkedIn</a>
                            </div>
                        </div>
                    </div>
                </div>
                <br />
                <br />
            </div>
        </section>
    );
};

export default Contact;