import axios from 'axios';
import React, { useEffect, useState } from 'react';
import PorfolioItem from '../PortfolioItem/PortfolioItem';
import './PortfolioPage.css'

const PortfolioPage = () => {

    const [webData, setWebData] = useState([]);
    const [graphicsData, setGraphicsData] = useState([]);
    const [portfoliosWeb, setPortfoliosWeb] = useState(true)

    const [portfolioLoaded, setPortfolioLoaded] = useState(false)

    const path = window.location.pathname

    useEffect(() => {
        axios.get('/portfolios')
            .then(dt => {
                const data = dt.data
                const filterData = (fdt) => {
                    const fData = data.filter(dt => dt.type === fdt)
                    const sortedDt = fData.sort((a, b) => {
                        return parseInt(a.nu) - parseInt(b.nu)
                    })
                    return sortedDt
                }
                setWebData(filterData("web"))
                setGraphicsData(filterData("graphics"))
                setPortfolioLoaded(true)
            });
    }, [])

    return (
        <section style={{ paddingTop: '150px', marginBottom: '-8px' }} id="portfolio" className='portfolioMain bg_dark_blue'>
            <div className="container">
                {
                    path === "/portfolio" ?
                        <>
                            <h2 style={{ background: '#232a38', display: 'inline-block', paddingRight: '20px' }} className='text-info workHeader'>My Portfolio</h2>
                            <div className='sectionTitlesBackLine'></div>
                        </>
                        :
                        <>
                            <h2 style={{ background: '#232a38', display: 'inline-block', paddingRight: '20px' }} className='text-light workHeader'>From My <span className="text-danger">Work</span> </h2>
                            <div className='sectionTitlesBackLine'></div>
                        </>
                }
                <br />
                <div className="row">
                    {
                        portfolioLoaded ?
                            <>
                                {
                                    path === "/portfolio" ?
                                        <>
                                            <div className="portfoliosSectionChanger pb-5 d-flex">
                                                <button onClick={() => setPortfoliosWeb(true)} style={{ marginRight: "20px" }} className={portfoliosWeb ? "btn btn-outline-danger btn-sm px-4 active" : "btn btn-outline-danger btn-sm px-4"}>Website Design & Development</button>
                                                <button onClick={() => setPortfoliosWeb(false)} className={portfoliosWeb ? "btn btn-outline-danger btn-sm px-4" : "btn btn-outline-danger btn-sm px-4 active"}>Graphics Design</button>
                                            </div>
                                            {
                                                portfoliosWeb ?
                                                    <div className="card-deck workContentMain">
                                                        {
                                                            webData.map(wk =>
                                                                <PorfolioItem work={wk}>
                                                                    <p className="text-light">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been standard.</p>
                                                                </PorfolioItem>
                                                            )
                                                        }
                                                    </div>
                                                    :
                                                    <div className="card-deck workContentMain">
                                                        {
                                                            graphicsData.map(wk =>
                                                                <PorfolioItem work={wk}>
                                                                    <p className="text-light">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been standard.</p>
                                                                </PorfolioItem>
                                                            )
                                                        }
                                                    </div>
                                            }
                                        </>
                                        :
                                        <>
                                            
                                        </>
                                }
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
            </div>
        </section>
    );
};

export default PortfolioPage;