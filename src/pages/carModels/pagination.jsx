import React from 'react';
import { Link } from 'react-router-dom';

const Pagination = ({ modelsPerPage, totalCarsModel, paginate }) => {
    const pageNumbers = [];
    for (let i=1; i<=Math.ceil(totalCarsModel/modelsPerPage); i++) {
        pageNumbers.push(i);
    }
    

    return (
        <nav>
            <ul className='pagination'>
                {pageNumbers.map(number => (
                    <li key={number} className='page-item'>
                        <button className="paginationButton"><Link onClick={() => paginate(number)} to='/carsModel/' className='page-link'>
                            {number}
                        </Link>
                        </button>
                    </li>
                ))}
            </ul>
        </nav>
    )
}

export default Pagination;