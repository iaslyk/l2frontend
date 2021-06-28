import { inject, observer } from 'mobx-react';
import React from 'react';
import { Link } from 'react-router-dom';


const AddCarModel =({addCarModelStore, carMakesStore}) => {
    return (
      <div className="App">
              <h2 className="addCarMake">Add Car Model</h2>
                  <form className="addCarMake">
                    
                    <input className="addInput"
                          type="text"
                          placeholder="Model Name"
                          ref={addCarModelStore.newCarModelName}
                    />
                    <input className="addInput"
                          type="text"
                          placeholder="Model Fuel"
                          ref={addCarModelStore.newCarModelFuel}
                    />
                    <br />
                    <input className="addInputInfo"
                          type="text"
                          placeholder="Model Info"
                          ref={addCarModelStore.newCarModelInfo}
                    />
                    <h3>Choose a Car Make:</h3>
                    <select className="dropdown" onChange={carMakesStore.carsMakeData.carsMake.id} ref={addCarModelStore.carMakeModel}>
                      {carMakesStore.carsMakeData.carsMake.map((carMake) => {
                        return (
                          <option  key={carMake.id}>
                            {carMake.id}
                          </option>
                        )
                      })}
                      
                    </select>
                  </form>
                  <br></br>
              <button className="buttonUpdate" onClick={() => addCarModelStore.createCarModel(addCarModelStore.newCarModelName.current.value)}><Link to="/carsModel">Save New Car Model</Link></button>
              <button className="buttonDelete"><Link to="/carsModel">Close New Model Editor</Link></button>
      </div>
    );}


export default inject(addCarModelStore => ({addCarModelStore: addCarModelStore}), carMakesStore => ({carMakesStore: carMakesStore})) (observer(AddCarModel));
