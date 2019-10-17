import React from 'react'
const TableBody = props => {
    const rows = props.resteraunts.map((row, index) => {
        return(<tr key={row.id}>
            <td>{row.name}</td>
            <td>{row.desc.length > 20 ? row.desc.substring(0,20) + ' ...'  : row.desc}</td>
            <td>{row.address.number}, {row.address.street}, {row.address.city}, {row.address.country}</td>
            <td>{row.phone}</td>
        </tr>)

    })
    return <tbody>{rows}</tbody>
}
export default TableBody;