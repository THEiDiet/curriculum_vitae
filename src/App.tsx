import React from 'react';
import s from './styles/App.module.scss';
import Header from "./components/Header";
import Home from "./components/Home";
import Skills from "./components/Skills/Skills";
import Portfolio from "./components/Portfolio/Portfolio";
import Form from "./components/Form";
import Footer from "./components/Footer";

const App = () => {

    return (
    <div className={s.app}>
        <Header/>
        <Home/>
        <Skills/>
        <Portfolio/>
        <Form/>
        <Footer/>
    </div>
  );
}

export default App;
