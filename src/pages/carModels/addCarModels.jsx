import { inject, observer } from 'mobx-react';
import React from 'react';
import { Link } from 'react-router-dom';

const AddCarModel = ({stores}) => {
  
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
                    <select className="dropdown" onChange={stores.carMakesStore.carsMakeData.carsMake.id} ref={stores.carModelsStore.carsModelData.carMakeModel}>
                      {stores.carMakesStore.carsMakeData.carsMake.map((carMake) => {
                        return (
                          <option  key={carMake.id}>
                            {carMake.carMakeAbrv}
                          </option>
                        )
                      })}
                      
                    </select>
                  </form>
                  <br></br>
              <button className="buttonUpdate" onClick={() => stores.carModelsStore.createCarModel(stores.carModelsStore.newCarModelName.current.value)}><Link to="/carsModel">Save New Car Model</Link></button>
              <button className="buttonDelete"><Link to="/carsModel">Close New Model Editor</Link></button>
      </div>
    );
};

export default inject('stores') (observer(AddCarModel));