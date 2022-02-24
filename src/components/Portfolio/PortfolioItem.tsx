import React, {useState} from 'react';

import s from '../../styles/Portfolio.module.scss'
type projectType = {
    image:string
    name:string
    description:string
    link:string
}
const PortfolioItem = ({image,description,name,link}:projectType) => {
    const [isTouched,setIsTouched] = useState(false)
    const onMouseEnterHandler = () => {
        setIsTouched(true)
    }
    const onMouseLeaveHandler = () => {
        let id = setTimeout(()=>{
            setIsTouched(false)
            clearTimeout(id)
        },300)
    }
    const onClickHandler = () => {
        if(window){
            window.location.href = link
        }
    }
    return (
        <div className={s.portfolio__item} onClick={onClickHandler}>
            <div className={s.portfolio__preview} onMouseLeave={onMouseLeaveHandler} onMouseEnter={onMouseEnterHandler}>

                <img className={`${s.preview__img} ${ isTouched ? s.preview__img_hover : ''}`} src={image} />
                <span  className={`${s.portfolio__button_hidden} ${isTouched ? s.portfolio__button_showed : ''}`}>See</span>
            </div>
            <div className={s.name}>
                <h3 className={`${s.name_hidden} ${isTouched && s.name_showed}`}>{name}</h3>
            </div>
        </div>
    );
};

export default PortfolioItem;