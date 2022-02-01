import React, { Component } from 'react';

export default class Kekambas extends Component {
    constructor(props){
        super(props);
        this.state = {
            kekambas: []
        }
        this.getKekambas = this.getKekambas.bind(this);
    }

    // componentDidMount(){
    //     fetch('https://kekambas-bs.herokuapp.com/kekambas')
    //         .then(res => res.json())
    //         .then(data => {
    //             console.log(data)
    //             this.setState({
    //                 kekambas: data
    //             })
    //         })
    // }   

    getKekambas(){
        fetch('https://kekambas-bs.herokuapp.com/kekambas')
            .then(res => res.json())
            .then(data => {
                console.log(data)
                this.setState({
                    kekambas: data
                })
            })
    }

    render() {
        return (
            <div>
                <h1>Kekambas Section!</h1>
                <button className='btn btn-danger' onClick={this.getKekambas}>Get Kekambas</button>
                <ul>
                    {this.state.kekambas.map((k, i) => <li key={i}>{k.first_name} {k.last_name}</li>)}
                </ul>
            </div>
        );
    }
}
