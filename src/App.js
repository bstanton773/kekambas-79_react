import React, { Component } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './views/Home';
import Kekambas from './views/Kekambas';
import RacerList from './views/RacerList';

export default class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            name: '',
            count: 0
        }
    }

    incrementTotalCount = (step) => {
        const newCount = this.state.count + step
        this.setState({
            count: newCount
        })
    }

    componentDidMount(){
        let userName = prompt('What is your name?');
        this.setState({
            name: userName
        })
    }


    render() {
        return (
            <>
                <Navbar />
                <div className='container'>
                    <Routes>
                        <Route path="/" element={<Home name={this.state.name} incrementTotalCount={this.incrementTotalCount} count={this.state.count} />} />
                        <Route path="racers" element={<RacerList />} />
                        <Route path="kekambas" element={<Kekambas />} />
                    </Routes>
                    
                </div>
            </>
        );
    }
}
