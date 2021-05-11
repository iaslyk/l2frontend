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
                                      ref={stores.carModelsStore.carModelNameEdit}
                                      
                              />
                              <input className="addInput"
                                      type="text"
                                      defaultValue={stores.carModelsStore.carsModel[modelId].carModelFuel}
                                      ref={stores.carModelsStore.carModelFuelEdit}
                                      
                              />
                              <input className="addInput"
                                      type="text"
                                      defaultValue={stores.carModelsStore.carsModel[modelId].carModelInfo}
                                      ref={stores.carModelsStore.carModelInfoEdit}
                                      
                              />
                              <h3>Choose a Car Make:</h3>
                    <select className="dropdown" onChange={stores.carMakesStore.carsMake.id} ref={stores.carModelsStore.carMakeModel}>
                      {stores.carMakesStore.carsMake.map((carMake) => {
                        return (
                          <option key={carMake.id}>{carMake.carMakeAbrv}</option>
                        )
                      })}
                      </select>
                      <button className="buttonUpdate" onClick={() => stores.carModelsStore.editCarModel(stores.carModelsStore.carModelNameEdit.current.value)}><Link to="/carmodels">Save Car Model Edit</Link></button>
                    </form>
                    
                      <Link to="/"><button className="buttonDelete">Close Model Editor</button></Link>
        </div>
      );
    };

export default inject('stores') (observer(EditCarModel));
