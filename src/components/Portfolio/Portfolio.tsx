import React from 'react';
import c from "../../styles/common.module.scss";
import s from "../../styles/Portfolio.module.scss";
import PortfolioItem from "./PortfolioItem";
import preview from '../../assets/preview.png'

const Portfolio = () => {
    return (
        <div className={`${c.container} ${s.portfolio}`} id='portfolio'>
            <h2 className={`${c.header} ${s.header}`}>Portfolio</h2>
            <div className={s.flex}>
                <PortfolioItem name={'name'} description={'desc'} image={preview}/>
                <PortfolioItem name={'name'} description={'desc'} image={preview}/>
                <PortfolioItem name={'name'} description={'desc'} image={preview}/>
            </div>
        </div>
    );
};

export default Portfolio;