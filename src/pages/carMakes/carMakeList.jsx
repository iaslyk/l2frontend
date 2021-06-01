import React from 'react';
import {inject, observer} from 'mobx-react';
import {Link} from 'react-router-dom';

class CarMakeList extends React.Component {  
    render() {
    return (
    <div>
        <p className="storesDetails">{this.props.carMakesStore.storeDetails}</p>
        <table>
            <thead className="tableMakeHead">
                <tr>
         
                    <th>Car Make Name</th>
                    <th>Car Make Abbreviation</th>
                    <th></th>
                </tr>
            </thead>
            <tbody className="tableMakeBody">
                {this.props.carMakesStore.carsMake.map((carMake) => {
                    return (
                        <tr key={carMake.id}>
                            
                            <td>{carMake.carMakeName}</td>
                            <td>{carMake.carMakeAbrv}</td>
                            <td>
                                <Link exact to={`/carmakes/${carMake.id}`}><button className="buttonUpdate">Update {carMake.carMakeAbrv}</button></Link>
                                
                            </td>
                            <td>
                            <button onClick={() => this.props.carMakesStore.deleteCarMake(carMake.id)} className="buttonDelete">Delete {carMake.carMakeAbrv}</button>
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
    )}

}

// 

export default inject('carMakesStore') (observer(CarMakeList));