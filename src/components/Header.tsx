import React from 'react';
import c from './../styles/common.module.scss'
import s from './../styles/Header.module.scss'

const Header = () => {
    return (
        <div className={s.headerContainer}>
            <div className={`${c.container} ${s.header}`}>
                <a href='#home'>Home</a>
                <a href='#skills'>Skills</a>
                <a href='#portfolio'>Portfolio</a>
                <a href='#contacts'>Contacts</a>
            </div>
        </div>
    );
};

export default Header;