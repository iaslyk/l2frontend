import React from 'react';
import {observer} from 'mobx-react';
import {Link} from 'react-router-dom';


function CarMakeList({store}) {
    const handleUpdateCarMake = (carMake) => {
        store.updateCarMake(carMake.id, carMake);
    }

    const handleDeleteCarMake = (carMake) => {
        store.deleteCarMake(carMake.id)
    }
    return (
    <div>
        <p className="storeDetails">{store.storeDetails}</p>
        <table>
            <thead className="tableMakeHead">
                <tr>
         
                    <th>Car Make Name</th>
                    <th>Car Make Abbreviation</th>
                    <th></th>
                </tr>
            </thead>
            <tbody className="tableMakeBody">
                {store.carsMake.map((carMake) => {
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

export default observer(CarMakeList);