import React, {useState} from 'react';
import s from './styles/App.module.scss';
import Header from "./components/Header";
import Home from "./components/Home";
import Skills from "./components/Skills/Skills";
import Portfolio from "./components/Portfolio/Portfolio";
import Form from "./components/Form";
import Footer from "./components/Footer";
import Parallax from "./components/parallax/Parallax";
import Modal from "./components/Modal";
import preview from './assets/preview.png'
const item  = {
    preview:preview,
    title:'title',
    desc:'se',
    git:'git',
    deploy:'deploy'
}
export type itemType = typeof item
const App = () => {
    const [isModalOpen,setIsModalOpen] = useState(false)
    return (
    <div className={s.app}>
        {isModalOpen &&<Modal item={item}/>}
        <Header/>
        <Parallax/>
        {/*<Home/>*/}
        <Skills/>
        <Portfolio/>
        <Form/>
        <Footer/>

    </div>
  );
}

export default App;
