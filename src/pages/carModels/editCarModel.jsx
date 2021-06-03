import React from 'react';
import { inject, observer } from 'mobx-react';
import { Link, useParams } from 'react-router-dom';

const EditCarModel = ({ stores }) => {
    
    const { modelId } = useParams();
    
      return (
        <div className="App">
                
                <h2>Edit {stores.carModelsStore.carsModelData.carsModel[modelId].carModelName} </h2>
                <p className="storeDetails">{stores.carModelsStore.storeDetails}</p>
                    <form className="addCarMake" >
                      <input className="addInput"
                                      type="text"
                                      defaultValue={stores.carModelsStore.carsModelData.carsModel[modelId].carModelName}
                                      onChange={e => (stores.carModelsStore.carsModelData.carsModel[modelId].carModelName = e.target.value)}                                      
                              />
                              <input className="addInput"
                                      type="text"
                                      defaultValue={stores.carModelsStore.carsModelData.carsModel[modelId].carModelFuel}
                                      onChange={e => (stores.carModelsStore.carsModelData.carsModel[modelId].carModelFuel = e.target.value)}                                                                            
                              />
                              <input className="addInput"
                                      type="text"
                                      defaultValue={stores.carModelsStore.carsModelData.carsModel[modelId].carModelInfo}
                                      onChange={e => (stores.carModelsStore.carsModelData.carsModel[modelId].carModelInfo = e.target.value)}                                      
                                      
                              />
                              <h3>Choose a Car Make:</h3>
                      <select className="dropdown" onChange={stores.carMakesStore.carsMakeData.carsMake.id} ref={stores.carModelsStore.carMakeModel}>
                      {stores.carMakesStore.carsMakeData.carsMake.map((carMake) => {
                        return (
                          <option key={carMake.id}>{carMake.carMakeAbrv}</option>
                        )
                      })}
                      </select>
                      <button className="buttonUpdate" onClick={() => stores.carModelsStore.editCarModel(stores.carModelsStore.carModelName)}><Link to="/carmodels">Save Car Model Edit</Link></button>
                    </form>
                    
                      <Link to="/carmodels"><button className="buttonDelete">Close Model Editor</button></Link>
        </div>
      );
    };

export default inject('stores') (observer(EditCarModel));
