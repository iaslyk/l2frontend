import React from 'react';
import { observer } from 'mobx-react';


function CarModelList({store}) {
    const handleAddCarModel = () => {
        const carModelId = prompt("Enter Car Model ID");
        const carMakeId = prompt("Enter Car Make ID");
        const carModelName = prompt("Enter Car Model Name");
        const carModelFuel = prompt("Enter Car Model Fuel");
        const carModelInfo = prompt("Enter Car Model Info");
        const carModel = store.createCarModel({id: carModelId, carModelName, carModelFuel, carModelInfo})
        store.assignCarMakeToCarModel(carMakeId, carModelId);
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

    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Car Model Id</th>
                        <th>Car Make</th>
                        <th>Car Model Name</th>
                        <th>Car Model Fuel</th>
                        <th>Car Model Info</th>
                    </tr>
                </thead>
                <tbody>
                    {store.carsModel.map((carModel) => {
                        return (
                            <tr key={carModel.id}>
                                <td>{carModel.id}</td>
                                <td>{carModel.carMake ? `${carModel.carMake?.carMakeId}`: "---"}
                                </td>
                                <td>{carModel.carModelName}</td>
                                <td>{carModel.carModelFuel}</td>
                                <td>{carModel.carModelInfo}</td>
                               
                                <td>
                                    <button onClick={() => handleDeleteCarModel(carModel)}>Delete {carModel.carModelName}</button>
                                    <button onClick={() => handleUpdateCarModel(carModel)}>Update {carModel.carModelName}</button>
                                </td>
                            </tr>
                            );
                    })}
                </tbody>
            </table>
            <button onClick={handleAddCarModel}>Add new model</button>
        </div>
        );

};

export default observer(CarModelList);