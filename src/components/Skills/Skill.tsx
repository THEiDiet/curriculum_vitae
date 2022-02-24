import React from 'react';
import s from '../../styles/Skills.module.scss'


type propsT = {
    title:string
    text:string

}

const Skill = ({title,text}:propsT) => {
    return (
        <div className={s.skill}>
            <h3 className={s.title}>{title}</h3>
            <p className={s.text}>{text}</p>
        </div>
    );
};

export default Skill;