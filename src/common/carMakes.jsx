import React from 'react';
import {observer} from 'mobx-react';


function CarMakeList({store}) {
    const handleAddCarMake = () => {
        const carMakeId = prompt("Car make ID")
        const carMakeName = prompt("Name of car make");
        const carMakeAbrv = prompt("Abbreviation");
        store.createCarMake({id: carMakeId, carMakeName, carMakeAbrv})
    };

    const handleUpdateCarMake = (carMake) => {
        carMake.carMakeName = prompt("Car Make Name", carMake.carMakeName);
        carMake.carMakeAbrv = prompt("Car Make Abbreviation", carMake.carMakeAbrv);
        store.updateCarMake(carMake.id, carMake);
    }

    const handleDeleteCarMake = (carMake) => {
        store.deleteCarMake(carMake.id)
    }
    return (
    <div>
        <p>{store.storeDetails}</p>
        <table>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Car Make Name</th>
                    <th>Car Make Abbreviation</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {store.carsMake.map((carMake) => {
                    return (
                        <tr key={carMake.id}>
                            <td>{carMake.id}</td>
                            <td>{carMake.carMakeName}</td>
                            <td>{carMake.carMakeAbrv}</td>
                            <td>
                                <button onClick={() => handleDeleteCarMake(carMake)}>Delete {carMake.carMakeName}</button>
                                <button onClick={() => handleUpdateCarMake(carMake)}>Update {carMake.carMakeName}</button>                           
                            </td>
                        </tr>
                    )
                })}
            </tbody>
        </table>  
        <button onClick={handleAddCarMake}>New Car Make</button>
    </div>
    )

}

export default observer(CarMakeList);