import React from 'react';

const SkillOnly = (props) => {
    const { title, progress } = props.dt;
    
    return (
        <div className="skillOnly">
            <div className="skillsTopText">
                <div style={{ width: '50%', textAlign: 'left' }}>{title}</div>
                <div style={{ width: '50%', textAlign: 'right' }}>{progress} %</div>
            </div>
            <div className="skillsProgressBur">
                <div style={{ width: progress+'%' }} className="skillsProgressBurMiddle"></div>
            </div>
        </div>
    );
};

export default SkillOnly;