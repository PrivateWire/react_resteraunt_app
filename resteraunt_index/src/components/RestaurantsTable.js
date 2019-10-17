import React, { Component } from 'react'
import { Table } from 'reactstrap';
import TableBody from './TableBody.js'
import TableHeader from './TableHeader.js'

class CharacterTable extends Component {
    render() {
        const { resterauntData } = this.props;
        return (
            <Table >
                <TableHeader />
                <TableBody resteraunts={resterauntData}/>
            </Table>
        )
    }
}

export default CharacterTable