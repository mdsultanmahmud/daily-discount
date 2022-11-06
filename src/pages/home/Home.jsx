import React from 'react';
import About from './About/About';
import GetUpdate from './GetUpdate/GetUpdate';
import Header from './Header/Header';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <About></About>
            <GetUpdate></GetUpdate>
        </div>
    );
};

export default Home;