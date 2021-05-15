import React from 'react';

const TableHeadItem = ({props }) => {
    return (
        <td title={props.thName}>
            {props.thName}
        </td>
    )
}

export default TableHeadItem;
