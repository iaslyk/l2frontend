import { inject, observer } from 'mobx-react';
import React from 'react';
import { Link } from 'react-router-dom';


const AddCarModel =({stores}) => {
    return (
      <div className="App">
              <h2 className="addCarMake">Add Car Model</h2>
              <p className="storeDetails">{stores.storeDetails}</p>
                  <form className="addCarMake">
                    
                    <input className="addInput"
                          type="text"
                          placeholder="Model Name"
                          ref={stores.newCarModelName}
                    />
                    <input className="addInput"
                          type="text"
                          placeholder="Model Fuel"
                          ref={stores.newCarModelFuel}
                    />
                    <br />
                    <input className="addInputInfo"
                          type="text"
                          placeholder="Model Info"
                          ref={stores.newCarModelInfo}
                    />
                    <h3>Choose a Car Make:</h3>
                    <select className="dropdown" onChange={stores.carsMakeData.carsMake.id} ref={stores.carMakeModel}>
                      {stores.carsMakeData.carsMake.map((carMake) => {
                        return (
                          <option  key={carMake.id}>
                            {carMake.id}
                          </option>
                        )
                      })}
                      
                    </select>
                  </form>
                  <br></br>
              <button className="buttonUpdate" onClick={() => stores.createCarModel(stores.addCarModelStore.newCarModelName.current.value)}><Link to="/carsModel">Save New Car Model</Link></button>
              <button className="buttonDelete"><Link to="/carsModel">Close New Model Editor</Link></button>
      </div>
    );}


export default inject(stores => ({addCarModelStore: stores.addCarModelStore, carMakeId: stores.carMakesStore})) (observer(AddCarModel));
