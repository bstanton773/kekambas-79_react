import React, { Component } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './views/Home';
import Kekambas from './views/Kekambas';
import RacerList from './views/RacerList';

export default class App extends Component {


    render() {
        return (
            <>
                <Navbar />
                <div className='container'>
                    <Routes>
                        <Route path="/" element={<Home name={'Brian'} />} />
                        <Route path="racers" element={<RacerList />} />
                        <Route path="kekambas" element={<Kekambas />} />
                    </Routes>
                    
                </div>
            </>
        );
    }
}
