import React from 'react';
import TableRow from './tableRow'
import TableHeadItem from './tableHead'

const Table = ({ tableHeadData, tableBodyData, customClass }) => {
    return (
        <table className={customClass}>
            <thead>
                <tr>
                    {tableHeadData.map((h) => {
                        return <TableHeadItem hey={h} />
                    })}
                </tr>
            </thead>
            <tbody>
                {tableBodyData.map((props) => {
                    return <TableRow key={props.id} data={props.items} />
                })}
            </tbody>
        </table>
    )
}

export default Table;
