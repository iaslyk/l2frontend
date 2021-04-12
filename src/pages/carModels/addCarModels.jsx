import React from 'react';
import { Link } from 'react-router-dom';
import '../../layouts/App.css';

function AddCarModel(carModelsStore) {
    const add = (e) => {
      e.preventDefault();
      carModelsStore.createCarMake(carModelsStore.carModelName.current.value)
    }
  
    return (
      <div className="App">
        
              <h2 className="addCarMake">Add Car Model</h2>
                  <form>
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
                  </form>
              <button className="buttonUpdate" onClick={add}><Link to="/carmodels">Save New Car Model</Link></button>
              <Link to="/carmodels"><button className="buttonDelete">Close New Model Editor</button></Link>
      </div>
    );
};

export default AddCarModel;