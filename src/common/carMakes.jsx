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
        <table>
            <thead className="tableMakeHead">
                <tr>
                    <th>Id</th>
                    <th>Car Make Name</th>
                    <th>Car Make Abbreviation</th>
                    <th></th>
                </tr>
            </thead>
            <tbody className="tableMakeBody">
                {store.carsMake.map((carMake) => {
                    return (
                        <tr key={carMake.id}>
                            <td>{carMake.id}</td>
                            <td>{carMake.carMakeName}</td>
                            <td>{carMake.carMakeAbrv}</td>
                            <td>
                                <button onClick={() => handleUpdateCarMake(carMake)} className="buttonUpdate">Update {carMake.carMakeAbrv}</button>                           
                                
                            </td>
                            <td>
                            <button onClick={() => handleDeleteCarMake(carMake)} className="buttonDelete">Delete {carMake.carMakeAbrv}</button>
                            </td>
                        </tr>
                    )
                })}
            </tbody>
            <tfoot className="tableMakeFooter">
                <td></td>
                <td></td>
            <button onClick={handleAddCarMake} className="buttonAddCar">New Car Make</button>
            </tfoot>
        </table>  
        
    </div>
    )

}

// <p className="storeDetails">{store.storeDetails}</p>

export default observer(CarMakeList);