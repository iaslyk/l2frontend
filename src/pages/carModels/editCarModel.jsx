import React from 'react';
import { inject, observer } from 'mobx-react';
import { Link, useParams } from 'react-router-dom';

const EditCarModel = ({ stores }) => {
    
    const { modelId } = useParams();
    
      return (
        <div className="App">
                
                <h2>Edit {stores.carModelsStore.carsModel[modelId].carModelName} </h2>
                <p className="storeDetails">{stores.carModelsStore.storeDetails}</p>
                    <form className="addCarMake" >
                      <input className="addInput"
                                      type="text"
                                      defaultValue={stores.carModelsStore.carsModel[modelId].carModelName}
                                      ref={stores.carModelsStore.newCarModelName}
                                      
                              />
                              <input className="addInput"
                                      type="text"
                                      defaultValue={stores.carModelsStore.carsModel[modelId].carModelFuel}
                                      ref={stores.carModelsStore.newCarModelFuel}
                                      
                              />
                              <input className="addInput"
                                      type="text"
                                      defaultValue={stores.carModelsStore.carsModel[modelId].carModelInfo}
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
                      <button className="buttonUpdate" onClick={() => stores.carModelsStore.editCarModel(stores.carModelsStore.newCarModelName.current.value)}><Link to="/carmodels">Save Car Model Edit</Link></button>
                    </form>
                    
                      <Link to="/"><button className="buttonDelete">Close Model Editor</button></Link>
        </div>
      );
    };

export default inject('stores') (observer(EditCarModel));
