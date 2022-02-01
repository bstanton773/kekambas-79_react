import React, { Component } from 'react';
import Button from '../components/Button';

export default class Home extends Component {
    constructor(props){
        super(props);
        this.state = {
            count: 0
        }
    }

    incrementTotalCount = (step) => {
        const newCount = this.state.count + step
        this.setState({
            count: newCount
        })
    }

    render() {
        const name = this.props.name
        return (
            <>
            <h1>Hello {name}</h1>
            <h4>{this.state.count}</h4>
            <Button step={1} handleClick={this.incrementTotalCount}/>
            <Button step={5} handleClick={this.incrementTotalCount}/>
            <Button step={10} handleClick={this.incrementTotalCount}/>
            <Button step={100} handleClick={this.incrementTotalCount}/>
            </>
        );
    }
}
