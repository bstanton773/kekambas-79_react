import React, { Component } from 'react';
import Button from './components/Button';
import Navbar from './components/Navbar';
import RacerList from './components/RacerList';

export default class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            count: 0
        }
    }

    incrementTotalCount = (step) => {
        console.log('The button has been clicked, friend')
        console.log(step)
        const newCount = this.state.count + step
        this.setState({
            count: newCount
        })
    }

    render() {
        const name = 'Brian'
        return (
            <>
                <Navbar />
                <div className='container'>
                    <h1>Hello {name}</h1>
                    <h4>{this.state.count}</h4>
                    <Button step={1} handleClick={this.incrementTotalCount}/>
                    <Button step={5} handleClick={this.incrementTotalCount}/>
                    <Button step={10} handleClick={this.incrementTotalCount}/>
                    <Button step={100} handleClick={this.incrementTotalCount}/>
                    <RacerList />
                </div>
            </>
        );
    }
}
