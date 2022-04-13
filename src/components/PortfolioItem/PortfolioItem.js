import React from 'react';

const WorkSection = (props) => {
    const { title, img, link, gh, skills, type } = props.work

    return (
        <div className="workContent col-sm-4">
            {
                type === 'graphics' ?
                    <div className="workItemGraphics d-flex align-items-center justify-content-center">
                        <img alt="Mx Asraful" className="workContentImg workItemGraphicsImg card-img-top" src={img} />
                    </div>
                    :
                    <img alt="Mx Asraful" className="workContentImg card-img-top" src={img} />
            }
            <div style={{ width: '100%' }} className="workContentDetails">
                <h5 className='text-info'>{title}</h5><br />
                {
                    props.children
                }
                <div className="useLanguageAndTools">
                    {
                        skills?.map(dt => (
                            <span className="skillNameBlock">{dt}</span>
                        ))
                    }
                </div><br />
                {
                    gh.length >= 2 && <a title='Github repository' target='blank' href={gh} className="workViewGithubBtn text-danger">
                        <svg fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="2em" height="2em">
                            <path d="M44,24c0,8.96-5.88,16.54-14,19.08V38c0-1.71-0.72-3.24-1.86-4.34c5.24-0.95,7.86-4,7.86-9.66c0-2.45-0.5-4.39-1.48-5.9 c0.44-1.71,0.7-4.14-0.52-6.1c-2.36,0-4.01,1.39-4.98,2.53C27.57,14.18,25.9,14,24,14c-1.8,0-3.46,0.2-4.94,0.61 C18.1,13.46,16.42,12,14,12c-1.42,2.28-0.84,4.74-0.3,6.12C12.62,19.63,12,21.57,12,24c0,5.66,2.62,8.71,7.86,9.66 c-0.67,0.65-1.19,1.44-1.51,2.34H16c-1.44,0-2-0.64-2.77-1.68c-0.77-1.04-1.6-1.74-2.59-2.03c-0.53-0.06-0.89,0.37-0.42,0.75 c1.57,1.13,1.68,2.98,2.31,4.19C13.1,38.32,14.28,39,15.61,39H18v4.08C9.88,40.54,4,32.96,4,24C4,12.95,12.95,4,24,4 S44,12.95,44,24z" />
                        </svg>
                    </a>
                }
                {
                    link.length >= 2 && <a target='blank' href={link} className="workViewWebsiteBtn text-danger">
                        <svg width="1.7em" height="1.7em" viewBox="0 0 16 16" class="bi bi-arrow-up-right-circle-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.879 10.828a.5.5 0 1 1-.707-.707l4.096-4.096H6.5a.5.5 0 0 1 0-1h3.975a.5.5 0 0 1 .5.5V9.5a.5.5 0 0 1-1 0V6.732l-4.096 4.096z" />
                        </svg>
                    </a>
                }
            </div>
        </div>
    );
};

export default WorkSection;