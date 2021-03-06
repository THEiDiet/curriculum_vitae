import React from 'react';
import c from "../../styles/common.module.scss";
import s from "../../styles/Portfolio.module.scss";
import PortfolioItem from "./PortfolioItem";
import auth from '../../assets/auth.jpg'
import todo from '../../assets/todo.jpg'

const Portfolio = () => {
    return (
        <div className={`${c.container} ${s.portfolio}`} id='portfolio'>
            <h2 className={`${c.header} ${s.header}`}>Portfolio</h2>
            <div className={s.flex}>
                <PortfolioItem name={'Todolist'} description={''} image={todo} link={'https://theidiet.github.io/todoList/'}/>
                <PortfolioItem name={'Auth'} description={''} image={auth} link={'https://theidiet.github.io/user_authentication/#/signup'}/>
            </div>
        </div>
    );
};

export default Portfolio;