import React from 'react';
import s from '../../styles/Skills.module.scss'
import c from '../../styles/common.module.scss'
import Skill from "./Skill";
import react from '../../assets/react.svg'
import head from '../../assets/head.png'

const Skills = () => {
    return (
        <div id='skills' className={`${c.container} ${s.skills}`}>
            <h2 className={`${s.header}`}>My skills</h2>
            <div className={s.skills__flex}>
                <div className={s.notes}>
                    <div className={s.notes__body}>
                        <div className={s.message}>Can I do something for you?</div>
                        <img src={head}/>
                    </div>
                </div>
                <div className={s.skillContainer}>
                    <Skill text={'toolkit, sagas, thunks'} title={'React'} img={react}/>
                    <Skill text={'toolkit, sagas, thunks'} title={'React'} img={react}/>
                    <Skill text={'toolkit, sagas, thunks'} title={'React'} img={react}/>
                    <Skill text={'class components, functional сomponents\n' +
                    'hooks, HOC and so on'} title={'Redux'} img={react}/>
                </div>
            </div>
        </div>
    );
};

export default Skills;