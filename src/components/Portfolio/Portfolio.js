import React, { useEffect, useState } from 'react';
import WorkSection from '../WorkSection/WorkSection';
import './Portfolio.css'

const Portfolio = () => {

    const [webData, setWebData] = useState([]);
    const [graphicsData, setGraphicsData] = useState([]);
    const [portfoliosWeb, setPortfoliosWeb] = useState(true)

    const [portfolioLoaded, setPortfolioLoaded] = useState(false)

    useEffect(() => {
        fetch('https://serene-peak-05996.herokuapp.com/portfolios')
            .then(response => response.json())
            .then(data => {
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

    console.log(webData)

    return (
        <section style={{ paddingTop: '150px', marginBottom: '-8px' }} id="portfolio" className='portfolioMain bg_dark_blue'>
            <div className="container">
                <h2 style={{ background: '#232a38', display: 'inline-block', paddingRight: '20px' }} className='text-info workHeader'>My Portfolio</h2>
                <div className='sectionTitlesBackLine'></div>
                <br />
                <div className="row">
                    {
                        portfolioLoaded ?
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
                                                    <WorkSection work={wk}>
                                                        <p className="text-light">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been standard.</p>
                                                    </WorkSection>
                                                )
                                            }
                                        </div>
                                        :
                                        <div className="card-deck workContentMain">
                                            {
                                                graphicsData.map(wk =>
                                                    <WorkSection work={wk}>
                                                        <p className="text-light">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been standard.</p>
                                                    </WorkSection>
                                                )
                                            }
                                        </div>
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
                <br />
                <br />
                <br />
            </div>
        </section>
    );
};

export default Portfolio;