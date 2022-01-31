import React, { Component } from 'react';
import RacerRow from './RacerRow';

export default class RacerList extends Component {
    constructor(props){
        console.log('Component Constructed')
        super(props);
        this.state = {
            racers: []
        }
    }

    componentDidMount(){
        console.log('Component Mounted')
        fetch('https://ergast.com/api/f1/2008/5/driverStandings.json')
            .then(res => res.json())
            .then(data => {
                console.log(data)
                this.setState({
                    racers: data.MRData.StandingsTable.StandingsLists[0].DriverStandings
                })
            })
    }

    render() {
        console.log('Component Rendered')
        return (
            <>
                <h1>This is the racer list!</h1>
                <table className='table table-dark table-striped'>
                <thead>
                    <tr>
                    <th scope="col">#</th>
                    <th scope="col">First</th>
                    <th scope="col">Last</th>
                    <th scope="col">Country</th>
                    <th scope="col">Team Name</th>
                    </tr>
                </thead>
                <tbody>
                    {this.state.racers.map((r, i) => <RacerRow racer={r} key={i} />)}
                </tbody>
                </table>
            </>
        );
    }
}
