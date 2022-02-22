import React, {useState} from 'react';
import s from '../../styles/Portfolio.module.scss'
type projectType = {
    image:string
    name:string
    description:string
}
const PortfolioItem = ({image,description,name}:projectType) => {
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
    return (
        <div className={s.portfolio__item} >
            <div className={s.portfolio__preview} >
                <img className={s.preview__img} src={image} onMouseLeave={onMouseLeaveHandler} onMouseEnter={onMouseEnterHandler}/>
            </div>
            <div className={s.name}>
                <h3 className={`${s.name_hidden} ${isTouched && s.name_showed}`}>{name}</h3>
            </div>
        </div>
    );
};

export default PortfolioItem;