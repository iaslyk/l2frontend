import React from 'react';
import {inject, observer} from 'mobx-react';

const Pagination = ({ stores, modelsPerPage, totalCarsModel, paginate }) => {
    const pageNumbers = [];
    for (let i=1; i<=Math.ceil(totalCarsModel/modelsPerPage); i++) {
        pageNumbers.push(i);
    }


    return (
        <nav>
            <ul className='pagination'>
                {pageNumbers.map(number => (
                    <li key={number} className='page-item'>
                        <a onClick={() => paginate(number)} href='/carmodels/!#' className='page-link'>
                            {number}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    )
}

export default inject('stores') (observer(Pagination));