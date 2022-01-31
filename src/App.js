import React, { Component } from 'react';
import Button from './components/Button';
import Navbar from './components/Navbar';

export default class App extends Component {

    render() {
        const name = 'Brian'
        return (
            <>
                <Navbar />
                <div className='container'>
                    <h1>Hello {name}</h1>
                    <Button step={1}/>
                    <Button step={5}/>
                    <Button step={10}/>
                    <Button step={100}/>
                </div>
            </>
        );
    }
}
