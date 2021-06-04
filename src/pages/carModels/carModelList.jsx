import React from 'react';
import { inject, observer } from 'mobx-react';
import {Link} from 'react-router-dom';
import Pagination from './pagination'

class CarModelList extends React.Component {
    
    componentDidMount() {
        this.props.carModelsStore.getCarsModelAsync();
    }
    
    render() {
    return (
        <div>
            <p className="storeDetails">{this.props.carModelsStore.storeDetails}</p>
            <input placeholder="Start typing model..."
                 onKeyUp={this.props.carModelsStore.onChangeFilterModels} />
            <table>
                <thead className="tableModelHead">
                    <tr>
                        <th>Car Model Name <br />
                            <button onClick={() => this.props.carModelsStore.sortedModelNames()} className="buttonSort">&uarr;</button>
                            <button onClick={() => this.props.carModelsStore.reverseSortedModelNames()} className="buttonSort">&darr;</button>                     
                        </th>
                        <th>Fuel Type <br />
                            <button onClick={() => this.props.carModelsStore.sortedModelFuel()} className="buttonSort">&uarr;</button>
                            <button onClick={() => this.props.carModelsStore.reverseSortedModelFuel()} className="buttonSort">&darr;</button></th>
                        <th>Car Make</th>
                        <th>Car Model Info</th>
                    </tr>
                </thead>
                <tbody className="tableModelBody">
                    {this.props.carModelsStore.carsModelData.carsModel.map((carModel) => {
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
                                <button onClick={() => this.props.carModelsStore.deleteCarModel(carModel.id)} className="buttonDelete">Delete {carModel.carModelName}</button>
                                </td>

                            </tr>
                            );
                    })}

                </tbody>
                <Pagination
                    modelsPerPage={this.props.carModelsStore.modelsPerPage}
                    totalCarsModel={this.props.carModelsStore.totalCarsModel}
                    paginate={this.props.carModelsStore.setPage}
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
}
};

export default inject('carModelsStore') (observer(CarModelList));



