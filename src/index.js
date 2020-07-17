import React, { Component } from 'react';
import { render } from 'react-dom';
import Header from './componets/Layout/Header';
import Footer from './componets/Layout/Footer';
import App from './App';

// Application Styles
// import './styles/bootstrap.scss';
// import './styles/app.scss'

const renderDom = Component => {
    render(
        <Header></Header>,
        document.getElementById('app')
    );
}
renderDom(App);
<Footer></Footer>
