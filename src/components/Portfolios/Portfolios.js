import React, { useEffect, useState } from 'react';
import './Portfolios.css';
import PortfolioItem from '../PortfolioItem/PortfolioItem';
import axios from 'axios';


const Work = () => {
    const [workDt, setWorkDt] = useState([])

    const [portfolioLoaded, setPortfolioLoaded] = useState(false)

    useEffect(() => {
        axios.get('/portfolios')
            .then(dt => {
                const data = dt.data
                const sortedDt = data.sort((a, b) => {
                    return parseInt(a.nu) - parseInt(b.nu)
                })
                setWorkDt(sortedDt.slice(0, 3))
                setPortfolioLoaded(true)
            })
    }, [])

    return (
        <section className='workMain bg_dark_blue'>
            <div className="container">
                <h2 style={{ background: '#232a38', display: 'inline-block', paddingRight: '20px' }} className='text-light workHeader'>From My <span className="text-danger">Work</span> </h2>
                <div className='sectionTitlesBackLine'></div>
                <br />
                <div className="workContentMain row">
                    {
                        portfolioLoaded ?
                            <>
                                {workDt.map(dt =>
                                    <PortfolioItem work={dt} />
                                )}
                            </>
                            :
                            <div className="portfolioLoader">
                                <div className="portfolioLoaderImgSection text-center">
                                    <div class="spinner-border text-secondary" role="status">
                                        <span class="visually-hidden"></span>
                                    </div>
                                </div>
                            </div>

                    }
                </div>
                <a href='/portfolio' style={{ float: 'right' }} className="btn btn-outline-danger btn-sm">View All</a>
                <br />
                <br />
                <br />
            </div>
        </section>
    );
};

export default Work;