import React from 'react';
import s from '../styles/Modal.module.scss'
import c from '../styles/common.module.scss'
import {itemType} from "../App";

type propsT = {
    item:itemType
}
const Modal = ({item}:propsT) => {
    return (
        <div className={s.modalBg}>
            <div className={s.modal}>
                <img className={s.image} src={item.preview} alt="preview"/>
                <h3 className={s.header}>{item.title}</h3>
                <p>{item.desc}</p>
            </div>
        </div>
    );
};

export default Modal;