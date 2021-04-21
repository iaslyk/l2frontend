import React, {useState} from 'react';
import { inject, observer } from 'mobx-react';
import { Link, useParams } from 'react-router-dom';

const EditCarModel = ({ stores }) => {
    
    const { modelId } = useParams();
    const [ modelName, setModelName ] = useState(stores.carModelsStore.carsModel[modelId].carModelName)
    const [ modelFuel, setModelFuel ] = useState(stores.carModelsStore.carsModel[modelId].carModelFuel)
    const [ modelInfo, setModelInfo ] = useState(stores.carModelsStore.carsModel[modelId].carModelInfo)

    // TODO: Fix edit functionality. useState is use as a quick workaround to check if page works
    // TODO: Fix info input layout

    const edit = (e) => {
        e.preventDefault();
        stores.carMakesStore.editCarMake(stores.carModelsStore.carModelNameEdit.current.value)
      }
      return (
        <div className="App">
                
                <h2>Edit {stores.carModelsStore.carsModel[modelId].carModelName} </h2>
                <p className="storeDetails">{stores.carModelsStore.storeDetails}</p>
                    <form className="addCarMake" >
                      <input className="addInput"
                                      type="text"
                                      defaultValue={stores.carModelsStore.carsModel[modelId].carModelName}
                                      ref={stores.carModelsStore.carModelNameEdit}
                                      onChange={(event) => setModelName(stores.carMakesStore.carsMake.carMakeNameEdit)}
                              />
                              <input className="addInput"
                                      type="text"
                                      defaultValue={stores.carModelsStore.carsModel[modelId].carModelFuel}
                                      ref={stores.carModelsStore.carModelFuelEdit}
                                      onChange={(event) => setModelFuel(stores.carMakesStore.carsMake.carMakeAbrvEdit)}
                              />
                              <input className="addInput"
                                      type="text"
                                      defaultValue={stores.carModelsStore.carsModel[modelId].carModelInfo}
                                      ref={stores.carModelsStore.carModelInfoEdit}
                                      onChange={(event) => setModelInfo(stores.carMakesStore.carsMake.carMakeAbrvEdit)}
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
                      <button className="buttonUpdate" onClick={edit}><Link to="/carmodels">Save Car Model Edit</Link></button>
                    </form>
                    
                      <Link to="/"><button className="buttonDelete">Close Model Editor</button></Link>
        </div>
      );
    };

export default inject('stores') (observer(EditCarModel));
