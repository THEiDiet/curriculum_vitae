import React from 'react';
import s from './../styles/Home.module.scss'
import c from '../styles/common.module.scss'
import circle from '../assets/circle.png'
import chibi from '../assets/chibi.png'
import {MouseParallaxChild, MouseParallaxContainer} from "react-parallax-mouse";

const Home = () => {
    let arr = [0,1,2,3]
    return (
        <div className={`${s.homeContainer}`} id='home'>
            <div className={`${c.container} ${s.home}`}>

                    {/*<MouseParallaxContainer className={s.elems}>*/}
                    {/*    {arr.map(el => (*/}
                    {/*        <MouseParallaxChild className={s['span'+el]} key={el} factorX={0.03} factorY={0.05} >*/}
                    {/*            <span  className={s['span'+el]}/>*/}
                    {/*        </MouseParallaxChild>*/}
                    {/*    ))}*/}
                    {/*</MouseParallaxContainer>*/}
                <div className={s.elems}>
                    {arr.map(el => <span key={el} className={s['span'+el]}/>)}
                    <span className={s.spanText}>こんにちは</span>
                </div>
                <div className={s.header}>
                    <h1>Hello world, it's <b>Alex</b></h1>
                    <p>And i'm a frontend developer And i'm a frontend developer</p>
                </div>
                <div className={s.photoContainer}>
                    <div className={s.photo}>
                        <img className={s.circle} src={circle}/>
                        <img className={s.chibi} src={chibi}/>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Home;