import React from 'react';

const BAndVItem = (props) => {

    const { img, title, link } = props.item

    return (
        <div className="col-sm-4 mb-5">
            <a href={link} target='_blank' className='vAndVItemMain rounded card' style={{width: "95%", background: "#1b203a", borderRadius: "12px", border: "none", color: "#1ba2b8", textDecoration: "none"}}>
                <img src={img} class="card-img-top" alt="..." />
                <div class="card-body">
                    <h5 class="card-title">{title}</h5>
                </div>
            </a>
        </div>
    );
};

export default BAndVItem;