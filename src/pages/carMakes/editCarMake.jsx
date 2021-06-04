import React from 'react';
import { inject, observer } from 'mobx-react';
import { Link, useParams } from 'react-router-dom';

const EditCarMake = ({ carMakesStore }) => {
    
    const { makeId } = useParams();
      return (
        <div className="App">
                
                <h2>Edit {carMakesStore.carsMakeData.carsMake[makeId].carMakeName}</h2>
                    <form className="addCarMake" >                      
                      <input className="addInput"
                                      type="text"
                                      defaultValue={carMakesStore.carsMakeData.carsMake[makeId].carMakeName}
                                      ref={carMakesStore.editCarMakeName}
                              />
                              <input className="addInput" 
                                      type="text"
                                      defaultValue={carMakesStore.carsMakeData.carsMake[makeId].carMakeAbrv}
                                      ref={carMakesStore.editCarMakeAbrv}                      
                              />
                      <button className="buttonUpdate" onSubmit={() => carMakesStore.editCarMake(carMakesStore.editCarMakeName.current.value)}>Save Car Make Edit</button>
                    </form>
                    
                      <Link to="/"><button className="buttonDelete">Close Make Editor</button></Link>
        </div>
      );
    };

export default inject('carMakesStore') (observer(EditCarMake));
