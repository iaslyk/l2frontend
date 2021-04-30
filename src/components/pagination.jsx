import React from 'react';

const Pagination = ({ modelsPerPage, totalCarsModel, paginate }) => {
    const pageNumbers = [];
    for (let i=1; i<=Math.ceil(totalCarsModel/modelsPerPage); i++) {
        pageNumbers.push(i);
    }


    return (
        <nav>
            <ul className='pagination'>
                {pageNumbers.map(number => (
                    <ul key={number} className='page-item'>
                        <a onClick={() => paginate(number)} href='/carmodels/#' className='page-link'>
                            {number}
                        </a>
                    </ul>
                ))}
            </ul>
        </nav>
    )
}

export default Pagination;