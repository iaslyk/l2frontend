import React, {useState} from 'react';
import { inject, observer } from 'mobx-react';
import { Link } from 'react-router-dom';

const EditCarMake = ({ carMakesStore }) => {
    const edit = (e) => {
        e.preventDefault();
        carMakesStore.editCarMake(carMakesStore.carMakeNameEdit.current.value)
      }
      return (
        <div className="App">
                
                <h2 >Add Car Make</h2>
                <p className="storeDetails">{carMakesStore.storeDetails}</p>
                    <form className="addCarMake" >
                      <input className="addInput"
                                      type="text"
                                      defaultValue={carMakesStore.carsMake.carMakeName}
                                      ref={carMakesStore.carMakeNameEdit}
                              />
                              <input className="addInput"
                                      type="text"
                                      defaultValue={carMakesStore.carsMake.carMakeAbrv}
                                      ref={carMakesStore.carMakeAbrvEdit}
                              />
                      <button className="buttonUpdate" onClick={edit}><Link to="/">Save New Car Make</Link></button>
                    </form>
                    
                      <Link to="/"><button className="buttonDelete">Close New Make Editor</button></Link>
        </div>
      );
    };

export default inject('carMakesStore') (observer(EditCarMake));