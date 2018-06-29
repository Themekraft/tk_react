import React, { Component } from 'react';

import Header from './components/Header';
import Splash from './components/Splash';
import MainContent from './components/MainContent';
import Footer from './components/Footer';

export default class Single extends Component {
    render() {
        return (
            <section className="tkr-page-template nopad template-single">

                <Header/>
                <Splash
                    bg_class="tkr-hot"
                    title="Single Post Template"
                    link_to="/"
                    link_text="Back Home"
                />
                <MainContent/>
                <Footer/>

            </section>
        );
    }
}