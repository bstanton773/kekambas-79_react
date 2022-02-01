import React, { useState, useEffect } from 'react';
import RacerForm from '../components/RacerForm';
import RacerRow from '../components/RacerRow';

export default function RacerList(props){
    const [racers, setRacers] = useState([])
    const [season, setSeason] = useState(2021)
    const [round, setRound] = useState(1)

    useEffect(() => {
        fetch(`https://ergast.com/api/f1/${season}/${round}/driverStandings.json`)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setRacers(data.MRData.StandingsTable.StandingsLists[0].DriverStandings)
            })
    }, [season, round])

    const handleForm = (e) => {
        e.preventDefault();
        console.log(e);
        const seasonInput = e.target.season.value
        const roundInput = e.target.round.value
        setSeason(seasonInput);
        setRound(roundInput);
    }
    
    return (
        <>
            <h1>This is the racer list!</h1>
            <RacerForm handleForm={handleForm} />
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
                {racers.map((r, i) => <RacerRow racer={r} key={i} />)}
            </tbody>
            </table>
        </>
    );
}
