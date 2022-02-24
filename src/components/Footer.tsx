import React, {useEffect, useRef, useState} from 'react';
import {Discord, Git, Instagram, LinkedIn, Telegram} from "../assets/social";
import s from '../styles/Footer.module.scss'
import c from '../styles/common.module.scss'
import big_head from '../assets/big.png'


const Footer = () => {
    const [isHere,setIsHere] = useState<boolean>(false)
    const ref = useRef(null)
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsHere(true)
                    if(window.innerWidth < 768){
                        setTimeout(()=> setIsHere(false),3000)
                    }
                } else if(isHere && !entry.isIntersecting){
                    setIsHere(false)
                }
            },
            {threshold: 0.6}
        );
        if (ref.current) {
            observer.observe(ref.current);
        }
    }, [ref]);
    return (
        <div className={`${s.footerContainer}`} ref={ref}>
            <div className={`${c.container} ${s.footer}`}>
                <div className={`${s.icons}`}>
                    <a href="https://www.linkedin.com/in/alex-kravets-b56b66223/" target='_blank'><LinkedIn/></a>
                    <a href="https://github.com/THEiDiet" target='_blank'><Git/></a>
                    <a href="https://www.instagram.com/kravetss_alex/" target='_blank'><Instagram/></a>
                    <a href="https://t.me/alex_kravets" target='_blank'><Telegram/></a>
                    <a href="https://discord.gg/6ur9JYrf" target='_blank'><Discord/></a>
                </div>
                <p >Are all rights reserved?</p>
                <div className={s.head}>
                    <img src={big_head} className={`${s.head__image_hidden} ${isHere ? s.head__image_showed : ''}`}/>
                </div>
            </div>
        </div>
    );
};

export default Footer;