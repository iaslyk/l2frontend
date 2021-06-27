import React from 'react';
import { inject, observer } from 'mobx-react';
import { Link } from 'react-router-dom';
import Pagination from './pagination'


const CarModelList = ({stores}) => {
    
    return (
        <div>
            <p className="storeDetails">{stores.storeDetails}</p>
            <input className="searchField" placeholder="Search model..."
                 onKeyUp={stores.onChangeFilterModels} />
            <table>
                <thead className="tableModelHead">
                    <tr>
                        <th>Car Model Name <br />
                            <button onClick={() => stores.sortedModelNames()} className="buttonSort">&uarr;</button>
                            <button onClick={() => stores.reverseSortedModelNames()} className="buttonSort">&darr;</button>                     
                        </th>
                        <th>Fuel Type <br />
                            <button onClick={() => stores.sortedModelFuel()} className="buttonSort">&uarr;</button>
                            <button onClick={() => stores.reverseSortedModelFuel()} className="buttonSort">&darr;</button></th>
                        <th>Car Make</th>
                        <th>Car Model Info</th>
                    </tr>
                </thead>
                <tbody className="tableModelBody">
                    {stores.filteredModels.map((carModel) => {
                        return (
                            <tr key={carModel.id} className="tableModelBody">
                                <td>{carModel.carModelName}</td>
                                <td>{carModel.carModelFuel}</td>
                                <td>{carModel.carMake}</td>
                                <td>{carModel.carModelInfo}</td>
                                
                               
                                <td >
                                <Link exact to={`/carsModel/${carModel.id}`}><button className="buttonUpdate">Update {carModel.carModelName}</button></Link>
                                </td>
                                <td>
                                <button onClick={() => stores.deleteCarModel(carModel.id)} className="buttonDelete">Delete {carModel.carModelName}</button>
                                </td>

                            </tr>
                            );
                    })}

                </tbody>
                <tfoot className="tableModelFooter">
                    <td className="pageSelection">Page: </td>
                    <td><Pagination
                    modelsPerPage={stores.modelsPerPage}
                    totalCarsModel={stores.totalCarsModel}
                    paginate={stores.setPage}
                /></td>
                    <td></td>
                    <Link to="/addcarmodel">
                        <button className="buttonUpdate">
                            Add Car Model
                        </button>
                    </Link>
                </tfoot>
                
            </table>
            

        </div>
    );
}


export default inject(stores => ({carModelsStore: stores.carModelsStore})) (observer(CarModelList));
