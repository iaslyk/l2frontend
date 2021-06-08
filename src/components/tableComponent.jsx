import React from 'react';
import {Link} from 'react-router-dom';

const CustomTableCarMake = ({data, rowData}) =>{
        return (
                <tbody className="tableMakeBody">
                    {data.map((rowData) => {
                        return (
                            <tr key={rowData.id}>
                                
                                <td>{rowData.carMakeName}</td>
                                <td>{rowData.carMakeAbrv}</td>
                                <td>
                                    <Link exact to={`/carsMake/${rowData.id}`}><button className="buttonUpdate">Update {rowData.carMakeAbrv}</button></Link>
                                    
                                </td>
                                <td>
                                <button onClick={() => this.props.carMakesStore.deleteCarMake(rowData.id)} className="buttonDelete">Delete {rowData.carMakeAbrv}</button>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>            
        )}

export default CustomTableCarMake;