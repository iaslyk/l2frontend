import React from 'react';
import { inject, observer } from 'mobx-react';
import { Link } from 'react-router-dom';
import Pagination from './pagination'

class CarModelList extends React.Component {
    
    componentDidMount() {
        this.props.stores.carModelsStore.getCarsModelAsync();
    }
  
    render() {
    return (
        <div>
            <p className="storeDetails">{this.props.stores.carModelsStore.storeDetails}</p>
            <input className="searchField" placeholder="Search model..."
                 onKeyUp={this.props.stores.carModelsStore.onChangeFilterModels} />
            <table>
                <thead className="tableModelHead">
                    <tr>
                        <th>Car Model Name <br />
                            <button onClick={() => this.props.stores.carModelsStore.sortedModelNames()} className="buttonSort">&uarr;</button>
                            <button onClick={() => this.props.stores.carModelsStore.reverseSortedModelNames()} className="buttonSort">&darr;</button>                     
                        </th>
                        <th>Fuel Type <br />
                            <button onClick={() => this.props.stores.carModelsStore.sortedModelFuel()} className="buttonSort">&uarr;</button>
                            <button onClick={() => this.props.stores.carModelsStore.reverseSortedModelFuel()} className="buttonSort">&darr;</button></th>
                        <th>Car Make</th>
                        <th>Car Model Info</th>
                    </tr>
                </thead>
                <tbody className="tableModelBody">
                    {this.props.stores.carModelsStore.filteredModels.map((carModel) => {
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
                                <button onClick={() => this.props.stores.carModelsStore.deleteCarModel(carModel.id)} className="buttonDelete">Delete {carModel.carModelName}</button>
                                </td>

                            </tr>
                            );
                    })}

                </tbody>
                <tfoot className="tableModelFooter">
                    <td className="pageSelection">Page: </td>
                    <td><Pagination
                    modelsPerPage={this.props.stores.carModelsStore.modelsPerPage}
                    totalCarsModel={this.props.stores.carModelsStore.totalCarsModel}
                    paginate={this.props.stores.carModelsStore.setPage}
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

export default inject('stores') (observer(CarModelList));



