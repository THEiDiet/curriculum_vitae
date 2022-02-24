import React from 'react';
import s from '../../styles/Parallax.module.scss'
import c from '../../styles/common.module.scss'
import {MouseParallaxChild, MouseParallaxContainer} from 'react-parallax-mouse';
import circle from "../../assets/circle.png";
import chibi from "../../assets/chibi.png";


const Parallax = () => {
    return (
        <>
            <MouseParallaxContainer
                className={`${s.homeContainer}`}
                resetOnLeave
            >
                <div className={`${c.container} ${s.home}`}>
                    <div className={s.header}>
                        <h1>Hello world, it's <b>Alex</b></h1>
                        <p>And i'm a frontend developer</p>
                    </div>
                    <div className={s.photoContainer}>
                        <div className={s.photo}>
                            <span className={s.circle}>
                            <img  src={circle}/>
                            </span>
                            <span  className={s.chibi}>
                                <img src={chibi}/>
                            </span>

                        </div>
                    </div>
                </div>
                <MouseParallaxChild
                    factorX={0.03}
                    factorY={0.1}
                    className={s.bg}
                />
                <MouseParallaxChild
                    factorX={0.05}
                    factorY={0.05}
                    className={s.span0}
                >
                    <span/>
                </MouseParallaxChild>
                <MouseParallaxChild
                    factorX={0.07}
                    factorY={0.05}
                    className={s.span1}
                >
                    <span/>
                </MouseParallaxChild>
                <MouseParallaxChild
                    factorX={0.09}
                    factorY={0.05}
                    className={s.span2}
                >
                    <span className={s.spanText}>こんにちは</span>
                </MouseParallaxChild>
                <MouseParallaxChild
                    factorX={0.07}
                    factorY={0.05}
                    className={s.span3}
                >
                    <span/>
                </MouseParallaxChild>
            </MouseParallaxContainer>
        </>
    );
};

export default Parallax;