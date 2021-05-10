import React from 'react';
import { inject, observer } from 'mobx-react';
import {Link} from 'react-router-dom';
import Pagination from './pagination'



function CarModelList({carModelsStore}) {

    return (
        <div>
            <p className="storeDetails">{carModelsStore.storeDetails}</p>
            <input placeholder="Start typing model..."
                 onKeyUp={carModelsStore.onChangeFilterModels} />
            <table>
                <thead className="tableModelHead">
                    <tr>
                        <th>Car Model Name <br />
                            <button onClick={() => carModelsStore.sortedModelNames()} className="buttonSort">&uarr;</button>
                            <button onClick={() => carModelsStore.reverseSortedModelNames()} className="buttonSort">&darr;</button>                     
                        </th>
                        <th>Fuel Type <br />
                            <button onClick={() => carModelsStore.sortedModelFuel()} className="buttonSort">&uarr;</button>
                            <button onClick={() => carModelsStore.reverseSortedModelFuel()} className="buttonSort">&darr;</button></th>
                        <th>Car Make</th>
                        <th>Car Model Info</th>
                    </tr>
                </thead>
                <tbody className="tableModelBody">
                    {carModelsStore.filteredModels.map((carModel) => {
                        return (
                            <tr key={carModel.id} className="tableModelBody">
                                <td>{carModel.carModelName}</td>
                                <td>{carModel.carModelFuel}</td>
                                <td>{carModel.carMake}</td>
                                <td>{carModel.carModelInfo}</td>
                                
                               
                                <td >
                                <Link exact to={`/carmodels/${carModel.id}`}><button className="buttonUpdate">Update {carModel.carModelName}</button></Link>
                                </td>
                                <td>
                                <button onClick={() => carModelsStore.deleteCarModel(carModel.id)} className="buttonDelete">Delete {carModel.carModelName}</button>
                                </td>

                            </tr>
                            );
                    })}

                </tbody>
                <Pagination
                    modelsPerPage={carModelsStore.modelsPerPage}
                    totalCarsModel={carModelsStore.totalCarsModel}
                    paginate={carModelsStore.setPage}
                />


                <tfoot className="tableModelFooter">
                    <td></td>
                    <td></td>
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

};

export default inject('carModelsStore') (observer(CarModelList));



