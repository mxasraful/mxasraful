import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import skillData from '../../skillData';
import SkillOnly from '../SkillOnly/SkillOnly';
import './Skill.css'

const Skill = () => {

    const [skillDataAll, setSkillDataAll] = useState(null)
    const skillDataProgramming = skillData.filter(pd => pd.catagories === 'lf')
    const skillDataTools = skillData.filter(pd => pd.catagories === 'to')
    const skillDataOthers = skillData.filter(pd => pd.catagories === 'ot')

    const [seeAllSkillBtn, setAllSkillBtn] = useState(true)


    // Set Initial Data For All Skills Tab
    useEffect(() => {
        setSkillDataAll(skillData.slice(0, 8))
        setAllSkillBtn(true)
    }, [])

    // Set All Data For All Skills Tab
    const setAllInAllSkills = () => {
        setSkillDataAll(skillData)
        setAllSkillBtn(false)
    }

    // console.log(skillDataAll)

    return (
        <section id='skill' className='skillMain bg_dark_blue'>
            <div className="container">
                <div className="row">
                    <br /><br /><br />
                    <h2 className="pageTitle text-light">My <span className="text-danger">Skills</span></h2>
                    <div class="sectionTitlesBackLine"></div>
                    <br /><br />
                    <div className="allSkillSection">
                        <ul class="nav nav-tabs skillMenu" id="myTab" role="tablist">
                            <li class="nav-item" role="presentation">
                                <a class="nav-link skillMenuTab active" id="home-tab" data-toggle="tab" href="#skillAll" role="tab" aria-controls="all" aria-selected="true">ALL</a>
                            </li>
                            <li class="nav-item" role="presentation">
                                <a class="nav-link skillMenuTab" id="skillPTab" data-toggle="tab" href="#skillProgramming" role="tab" aria-controls="programming" aria-selected="false"><span className="pFt">Programming, Library And Framework</span><span className="pSt">Programming</span></a>
                            </li>
                            <li class="nav-item" role="presentation">
                                <a class="nav-link skillMenuTab" id="skillTTab" data-toggle="tab" href="#skillTools" role="tab" aria-controls="tools" aria-selected="false">Tools</a>
                            </li>
                            <li class="nav-item" role="presentation">
                                <a class="nav-link skillMenuTab" id="skillOTab" data-toggle="tab" href="#skillOthers" role="tab" aria-controls="others" aria-selected="false">Others</a>
                            </li>
                        </ul>
                        <div class="tab-content skillSection" id="myTabContent">
                            <div class="card-deck tab-pane fade show active" id="skillAll" role="tabpanel" aria-labelledby="home-tab">
                                {
                                    skillDataAll?.map(dt => <SkillOnly dt={dt}></SkillOnly>)
                                }
                                {
                                    seeAllSkillBtn &&
                                    <div className="text-center mt-4 mb-5">
                                        <button className="px-5 py-1 btn btn-outline-danger " onClick={() => setAllInAllSkills()}>See All Skills</button>
                                    </div>
                                }
                            </div>
                            <div class="tab-pane fade" id="skillProgramming" role="tabpanel" aria-labelledby="skillPTab">
                                {
                                    skillDataProgramming.map(dt => <SkillOnly dt={dt}></SkillOnly>)
                                }
                            </div>
                            <div class="tab-pane fade" id="skillTools" role="tabpanel" aria-labelledby="skillTTab">
                                {
                                    skillDataTools.map(dt => <SkillOnly dt={dt}></SkillOnly>)
                                }
                            </div>
                            <div class="tab-pane fade" id="skillOthers" role="tabpanel" aria-labelledby="skillOTab">
                                {
                                    skillDataOthers.map(dt => <SkillOnly dt={dt}></SkillOnly>)
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skill;