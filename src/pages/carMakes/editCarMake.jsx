import React from 'react';
import { inject, observer } from 'mobx-react';
import { Link, useParams } from 'react-router-dom';

const EditCarMake = ({ carMakesStore }) => {
    
    const { makeId } = useParams();
      return (
        <div className="App">
                
                <h2>Edit {carMakesStore.carsMake[makeId].carMakeName}</h2>
                <p className="storeDetails">{carMakesStore.storeDetails}</p>
                    <form className="addCarMake" >
                      <input className="addInput"
                                      type="text"
                                      defaultValue={carMakesStore.carsMake[makeId].carMakeName}
                                      onChange={e => (carMakesStore.carsMake[makeId].carMakeName = e.target.value)}
                                    
                              />
                              <input className="addInput" 
                                      type="text"
                                      defaultValue={carMakesStore.carsMake[makeId].carMakeAbrv}
                                      onChange={e => (carMakesStore.carsMake[makeId].carMakeAbrv = e.target.value)}
                            
                              />
                      <button className="buttonUpdate" onClick={() => carMakesStore.editCarMake(carMakesStore.carMakeName)}><Link to="/">Save Car Make Edit</Link></button>
                    </form>
                    
                      <Link to="/"><button className="buttonDelete">Close Make Editor</button></Link>
        </div>
      );
    };

export default inject('carMakesStore') (observer(EditCarMake));
