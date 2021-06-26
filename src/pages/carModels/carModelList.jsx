import React from 'react';
import { inject, observer } from 'mobx-react';
import { Link } from 'react-router-dom';
import Pagination from './pagination'


class CarModelList extends React.Component {
    
    render() {
    return (
        <div>
            <p className="storeDetails">{this.storeDetails}</p>
            <input className="searchField" placeholder="Search model..."
                 onKeyUp={this.onChangeFilterModels} />
            <table>
                <thead className="tableModelHead">
                    <tr>
                        <th>Car Model Name <br />
                            <button onClick={() => this.sortedModelNames()} className="buttonSort">&uarr;</button>
                            <button onClick={() => this.reverseSortedModelNames()} className="buttonSort">&darr;</button>                     
                        </th>
                        <th>Fuel Type <br />
                            <button onClick={() => this.sortedModelFuel()} className="buttonSort">&uarr;</button>
                            <button onClick={() => this.reverseSortedModelFuel()} className="buttonSort">&darr;</button></th>
                        <th>Car Make</th>
                        <th>Car Model Info</th>
                    </tr>
                </thead>
                <tbody className="tableModelBody">
                    {this.filteredModels.map((carModel) => {
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
                                <button onClick={() => this.deleteCarModel(carModel.id)} className="buttonDelete">Delete {carModel.carModelName}</button>
                                </td>

                            </tr>
                            );
                    })}

                </tbody>
                <tfoot className="tableModelFooter">
                    <td className="pageSelection">Page: </td>
                    <td><Pagination
                    modelsPerPage={this.modelsPerPage}
                    totalCarsModel={this.totalCarsModel}
                    paginate={this.setPage}
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
};


export default inject(stores => ({carModelsStore: stores.carModelsStore, carMakeId: stores.carMakesStore.id})) (observer(CarModelList));
