import React from 'react';
import s from '../styles/Form.module.scss'
import c from '../styles/common.module.scss'

const Form = () => {
    return (
        <div className={s.form} id='contacts'>
            <div className={s.formElem}/>
            <div className={`${c.container} ${s.form__body}`}>
                <h2 className={`${c.header}`}>Contact me</h2>
            <form>
                <input className={s.input} placeholder={'Fake form...'} type="text"/>
                <input className={s.input} placeholder={'Fake form...'} type="text"/>
                <textarea  placeholder={'Any question...'} className={s.textarea}/>
            </form>
            </div>
        </div>
    );
};

export default Form;