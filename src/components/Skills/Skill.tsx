import React from 'react';
import s from '../../styles/Skills.module.scss'


type propsT = {
    title:string
    text:string
    img:string
}

const Skill = ({title,text,img}:propsT) => {
    return (
        <div className={s.skill}>
            <h3 className={s.title}>{title}</h3>
            <p className={s.text}>{text}</p>
        </div>
    );
};

export default Skill;