import React, { Component } from 'react';

export default class Button extends Component {
    constructor(props){
        super(props);
        this.state = {
            count: 0
        }
    }

    handleClick = () =>{
        console.log('The button has been clicked')
        let newCount = this.state.count + this.props.step
        this.setState({
            count: newCount
        })
    }

    render() {
        return (
            <button onClick={this.handleClick} className='btn btn-primary'>+{this.props.step} - {this.state.count}</button>
        );
    }
}
