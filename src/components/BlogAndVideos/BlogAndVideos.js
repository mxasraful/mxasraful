import axios from 'axios';
import React, { useEffect, useState } from 'react';
import BAndVItem from './BAndVItem/BAndVItem';
import './BlogAndVideos.css'

const BlogAndVideos = () => {

    const [items, setItems] = useState(null)
    const [loading, setLogin] = useState(true)

    useEffect(() => {
        setLogin(true)
        axios.get('/blog-and-videos')
            .then(dt => {
                setItems(dt.data)
                setLogin(false)
            })
    }, [])

    return (
        <div className='blogAndVideosMain bg_dark_blue' style={{ paddingTop: "150px", marginBottom: '-8px' }}>
            <div className="container">
                <>
                    <h2 style={{ background: '#232a38', display: 'inline-block', paddingRight: '20px' }} className='text-info workHeader'>My Portfolio</h2>
                    <div className='sectionTitlesBackLine'></div>
                </>
                <br /><br />
                <div className="row" style={{minHeight: "60vh"}}>
                    {
                        loading ?
                            <div className="portfolioLoader">
                                <div className="portfolioLoaderImgSection text-center">
                                    <div class="spinner-border text-secondary" role="status">
                                        <span class="visually-hidden"></span>
                                    </div>
                                </div>
                            </div>
                            :
                            <>
                                {
                                    items?.map(dt => (
                                        <BAndVItem item={dt} />
                                    ))
                                }
                            </>
                    }

                </div>
                <br /><br />
            </div>
        </div>
    );
};

export default BlogAndVideos;