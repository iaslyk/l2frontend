import { inject, observer } from 'mobx-react';
import React from 'react';
import { Link } from 'react-router-dom';
import '../../layouts/App.css';

const AddCarModel = ({carModelsStore}) => {
    const add = (e) => {
      e.preventDefault();
      carModelsStore.createCarModel(carModelsStore.newCarModelName.current.value)
    }
  
    return (
      <div className="App">
        
              <h2 className="addCarMake">Add Car Model</h2>
              <p className="storeDetails">{carModelsStore.storeDetails}</p>
                  <form className="addCarMake">
                    <input className="addInput"
                          type="text"
                          placeholder="Model Name"
                          ref={carModelsStore.newCarModelName}
                    />
                    <input className="addInput"
                          type="text"
                          placeholder="Model Fuel"
                          ref={carModelsStore.newCarModelFuel}
                    />
                    <input className="addInput"
                          type="text"
                          placeholder="Model Info"
                          ref={carModelsStore.newCarModelInfo}
                    />
                    <button className="buttonUpdate" onClick={add}><Link to="/carmodels">Save New Car Model</Link></button>
                  </form>
              
              <Link to="/carmodels"><button className="buttonDelete">Close New Model Editor</button></Link>
      </div>
    );
};

export default inject('carModelsStore') (observer(AddCarModel));