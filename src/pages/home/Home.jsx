import React from 'react';
import About from './About/About';
import ExploreProducts from './ExploreProducts/ExploreProducts';
import GetUpdate from './GetUpdate/GetUpdate';
import Header from './Header/Header';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <About></About>
            <ExploreProducts></ExploreProducts>
            <GetUpdate></GetUpdate>
        </div>
    );
};

export default Home;