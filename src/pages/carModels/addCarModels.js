import { inject, observer } from 'mobx-react';
import React from 'react';
import { Link } from 'react-router-dom';

const AddCarModel = ({stores}) => {
    const add = (e) => {
      e.preventDefault();
      stores.carModelsStore.createCarModel(stores.carModelsStore.newCarModelName.current.value)
    }
  
    return (
      <div className="App">
              <h2 className="addCarMake">Add Car Model</h2>
              <p className="storeDetails">{stores.carModelsStore.storeDetails}</p>
                  <form className="addCarMake">
                    
                    <input className="addInput"
                          type="text"
                          placeholder="Model Name"
                          ref={stores.carModelsStore.newCarModelName}
                    />
                    <input className="addInput"
                          type="text"
                          placeholder="Model Fuel"
                          ref={stores.carModelsStore.newCarModelFuel}
                    />
                    <input className="addInput"
                          type="text"
                          placeholder="Model Info"
                          ref={stores.carModelsStore.newCarModelInfo}
                    />
                    <h3>Choose a Car Make:</h3>
                    <select className="dropdown">
                      {stores.carMakesStore.carsMake.map((carMake) => {
                        return (
                          // Need to add onChange event to select component
                          <option value={stores.carMakesStore.carsMake.id} ref={stores.carModelsStore.carMakeModel} key={carMake.id}
                          >{carMake.carMakeAbrv}</option>
                        )
                      })}
                      
                    </select>
                  </form>
                  <br></br>
              <button className="buttonUpdate" onClick={add}><Link to="/carmodels">Save New Car Model</Link></button>
              <button className="buttonDelete"><Link to="/carmodels">Close New Model Editor</Link></button>
      </div>
    );
};

export default inject('stores') (observer(AddCarModel));