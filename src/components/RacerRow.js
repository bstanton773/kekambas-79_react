import React, { Component } from 'react';

export default class RacerRow extends Component {
    render() {
        const racer = this.props.racer
        return (
            <tr>
                <th>{racer.position}</th>
                <td>{racer.Driver.givenName}</td>
                <td>{racer.Driver.familyName}</td>
                <td>{racer.Driver.nationality}</td>
                <td>{racer.Constructors[0].name}</td>
            </tr>
        )
    }
}
