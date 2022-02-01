import React, { Component } from 'react';
import Button from '../components/Button';
import ButtonNameChange from '../components/ButtonNameChange';

export default class Home extends Component {
    // constructor(props){
    //     super(props);
    //     this.state = {
    //         count: 0
    //     }
    // }

    // incrementTotalCount = (step) => {
    //     const newCount = this.state.count + step
    //     this.setState({
    //         count: newCount
    //     })
    // }

    render() {
        const name = this.props.name
        return (
            <>
            <h1>Hello {name}</h1>
            <h4>{this.props.count}</h4>
            <div>

            <Button step={1} handleClick={this.props.incrementTotalCount}/>
            <Button step={5} handleClick={this.props.incrementTotalCount}/>
            <Button step={10} handleClick={this.props.incrementTotalCount}/>
            <Button step={100} handleClick={this.props.incrementTotalCount}/>
            </div>
            <div>
                <ButtonNameChange changeName={this.props.changeName}/>
            </div>

            </>
        );
    }
}
