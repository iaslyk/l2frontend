import React, { useState } from 'react';
import { inject, observer } from 'mobx-react';
import {Link} from 'react-router-dom';



function CarModelList({carModelsStore}) {

    const [searchTerm, setSearchTerm] = useState("")
    const handleUpdateCarModel = (carModel) => {
        carModel.carModelName = prompt("Enter Car Model Name", carModel.carModelName);
        carModel.carModelFuel = prompt("Enter Car Model Fuel", carModel.carModelFuel);
        carModel.carModelInfo = prompt("Enter Car Model Info", carModel.carModelInfo);
        carModelsStore.updateCarModel(carModel.id, carModel);
    };

    const handleDeleteCarModel = (carModel) => {
        carModelsStore.deleteCarModel(carModel.id);
    }

    const handleSorting = () => {
        carModelsStore.sortedModelNames()
    }

    const handleFuelSorting = () => {
        carModelsStore.sortedModelFuel()
    }
    
    const handleReverseSorting = () => {
        carModelsStore.reverseSortedModelNames()
    }

    const handleReverseFuelSorting = () => {
        carModelsStore.reverseSortedModelFuel()
    }
    
    return (
        <div>
            <p className="storeDetails">{carModelsStore.storeDetails}</p>
            <input type="text" placeholder="Search..." onChange={event => {setSearchTerm(event.target.value)}}/>
            <table>
                <thead className="tableModelHead">
                    <tr>
                        <th>Car Model Name <br />
                            <button onClick={handleSorting} className="buttonSort">&uarr;</button>
                            <button onClick={handleReverseSorting} className="buttonSort">&darr;</button>                     
                        </th>
                        <th>Fuel Type <br />
                            <button onClick={handleFuelSorting} className="buttonSort">&uarr;</button>
                            <button onClick={handleReverseFuelSorting} className="buttonSort">&darr;</button></th>
                        <th>Car Model Info</th>
                    </tr>
                </thead>
                <tbody className="tableModelBody">
                    {carModelsStore.carsModel.filter(
                        // eslint-disable-next-line array-callback-return
                        (carModel) => {
                            if (searchTerm === "") {
                                return carModel
                            } else if (carModel.carModelName.toLowerCase().includes(searchTerm.toLocaleLowerCase())){
                                return carModel
                            }else if (carModel.carModelFuel.toLowerCase().includes(searchTerm.toLocaleLowerCase())){
                                return carModel
                            }
                        }
                    ).map((carModel) => {
                        return (
                            <tr key={carModel.id} className="tableModelBody">
                                <td>{carModel.carModelName}</td>
                                <td>{carModel.carModelFuel}</td>
                                <td>{carModel.carModelInfo}</td>
                               
                                <td >
                                <button onClick={() => handleUpdateCarModel(carModel)} className="buttonUpdate">Update {carModel.carModelName}</button>
                                </td>
                                <td>
                                <button onClick={() => handleDeleteCarModel(carModel)} className="buttonDelete">Delete {carModel.carModelName}</button>
                                </td>
                            </tr>
                            );
                    })}

                </tbody>
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



