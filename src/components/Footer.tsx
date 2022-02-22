import React from 'react';
import {Discord, Git, Instagram, LinkedIn, Telegram} from "../assets/social";
import s from '../styles/Footer.module.scss'
import c from '../styles/common.module.scss'
import big_head from '../assets/big.png'


const Footer = () => {

    return (
        <div className={`${s.footerContainer}`}>
            <div className={`${c.container} ${s.footer}`}>
                <div className={`${s.icons}`}>
                    <a href="https://t.me/alex_kravets"><LinkedIn/></a>
                    <a href="https://t.me/alex_kravets"><Git/></a>
                    <a href="https://t.me/alex_kravets"><Instagram/></a>
                    <a href="https://t.me/alex_kravets"><Telegram/></a>
                    <a href="https://t.me/alex_kravets"><Discord/></a>
                </div>
                <p>Is all rights reserved?</p>
                {/*-------------in process----------*/}
                {/*<div className={s.head}>*/}
                {/*    <img src={big_head}className={s.head__image}/>*/}
                {/*</div>*/}
            </div>
        </div>
    );
};

export default Footer;