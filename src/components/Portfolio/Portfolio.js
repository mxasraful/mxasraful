import React, { useEffect, useState } from 'react';
import WorkSection from '../WorkSection/WorkSection';
import spinner from './../../spinner/spinner2.svg';

const Portfolio = () => {

    const [data, setData] = useState([]);

    const [portfolioLoaded, setPortfolioLoaded] = useState(false)

    useEffect(() => {
        fetch('https://serene-peak-05996.herokuapp.com/portfolios')
            .then(response => response.json())
            .then(data => {
                const sortedDt = data.sort((a, b) => {
                    return parseInt(a.nu) - parseInt(b.nu)
                })
                setData(sortedDt)
                setPortfolioLoaded(true)
            });
    }, [])

    return (
        <section style={{ paddingTop: '150px', marginBottom: '-8px' }} id="portfolio" className='portfolioMain bg_dark_blue'>
            <div className="container">
                <h2 style={{ background: '#232a38', display: 'inline-block', paddingRight: '20px' }} className='text-info workHeader'>My Portfolio</h2>
                <div className='sectionTitlesBackLine'></div>
                <br />
                <div className="row">
                    {
                        portfolioLoaded ?
                            <div className="card-deck workContentMain">
                                {
                                    data.map(wk =>
                                        <WorkSection work={wk}>
                                            <p className="text-light">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been standard.</p>
                                        </WorkSection>
                                    )
                                }
                            </div>
                            :
                            <div className="portfolioLoader">
                                <div className="portfolioLoaderImgSection">
                                    <img src={spinner} alt="Mx Asraful Portfolio" className="portfolioLoaderImg" />
                                </div>
                            </div>
                    }
                </div>
                <br />
                <br />
                <br />
            </div>
        </section>
    );
};

export default Portfolio;