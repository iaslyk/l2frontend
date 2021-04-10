import React, { useState } from 'react';
import { observer } from 'mobx-react';



function CarModelList({store}) {

    const [searchTerm, setSearchTerm] = useState("")

    const handleAddCarModel = () => {
        const carModelId = prompt("Enter Car Model ID");
        const carMakeId = prompt("Enter Car Make ID");
        const carModelName = prompt("Enter Car Model Name");
        const carModelFuel = prompt("Enter Car Model Fuel");
        const carModelInfo = prompt("Enter Car Model Info");
        const carModel = store.createCarModel({id: carModelId, carModelName, carModelFuel, carModelInfo})
        store.assignCarMakeToCarModel(carMakeId, carModel.id);
    };

    const handleUpdateCarModel = (carModel) => {
        carModel.carModelName = prompt("Enter Car Model Name", carModel.carModelName);
        carModel.carModelFuel = prompt("Enter Car Model Fuel", carModel.carModelFuel);
        carModel.carModelInfo = prompt("Enter Car Model Info", carModel.carModelInfo);
        const carMakeId = prompt("Enter Car Make ID", carModel.carMake?.id);
        store.updateCarModel(carModel.id, carModel);
        if (carMakeId !== carModel.carMake?.id) {
            store.assignCarMakeToCarModel(carMakeId, carModel.id)
        }
    };

    const handleDeleteCarModel = (carModel) => {
        store.deleteCarModel(carModel.id);
    }

    const handleSorting = () => {
        store.sortedModelNames()
    }

    const handleFuelSorting = () => {
        store.sortedModelFuel()
    }
    
    const handleReverseSorting = () => {
        store.reverseSortedModelNames()
    }

    const handleReverseFuelSorting = () => {
        store.reverseSortedModelFuel()
    }
    
    return (
        <div>
            <input type="text" placeholder="Search..." onChange={event => {setSearchTerm(event.target.value)}}/>
            <table>
                <thead className="tableModelHead">
                    <tr>
                        <th>Car Model Id</th>
                        <th>Car Make</th>
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
                    {store.carsModel.filter(
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
                                <td className="tableModelBody">{carModel.id}</td>
                                <td>{carModel.carMake ?
                                `${carModel.carMake?.id}` : "Ne Radi"}   
                                </td>
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
                    <td></td>
                            <button onClick={handleAddCarModel} className="buttonAddCar">Add new model</button>  
                </tfoot>
            </table>

        </div>
    );

};

export default observer(CarModelList);