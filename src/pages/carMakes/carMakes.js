import React from 'react';
import {inject, observer} from 'mobx-react';
import {Link} from 'react-router-dom';


function CarMakeList({stores}) {
    const handleUpdateCarMake = (carMake) => {
        stores.carMakesStore.updateCarMake(carMake.id, carMake);
    }

    const handleDeleteCarMake = (carMake) => {
        stores.carMakesStore.deleteCarMake(carMake.id)
    }
    return (
    <div>
        <p className="storesDetails">{stores.carMakesStore.storeDetails}</p>
        <table>
            <thead className="tableMakeHead">
                <tr>
         
                    <th>Car Make Name</th>
                    <th>Car Make Abbreviation</th>
                    <th></th>
                </tr>
            </thead>
            <tbody className="tableMakeBody">
                {stores.carMakesStore.carsMake.map((carMake) => {
                    return (
                        <tr key={carMake.id}>
                            
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
                <br></br>
            <Link to="/addcarmake">
                <button className="buttonUpdate">
                    Add Car Make
                </button>
            </Link>
            </tfoot>
        </table>  
        
    </div>
    )

}

// 

export default inject('stores') (observer(CarMakeList));