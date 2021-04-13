import React from 'react';
import {inject, observer} from 'mobx-react'
import { Link } from 'react-router-dom';
import '../../layouts/App.css';

const AddCarMake = ({carMakesStore}) => {
  const add = (e) => {
    e.preventDefault();
    carMakesStore.createCarMake(carMakesStore.newCarMakeName.current.value)
    carMakesStore.createCarMake(carMakesStore.newCarMakeAbrv.current.value)
  }
  return (
    <div className="App">
            
            <h2 className="addCarMake" onSubmit={e => add(e)}>Add Car Make</h2>
            <p className="storeDetails">{carMakesStore.storeDetails}</p>
                <form>
                  <input className="addInput"
				              	type="text"
					              placeholder="Make Name"
					              ref={carMakesStore.newCarMakeName}
				          />
				          <input className="addInput"
					              type="text"
					              placeholder="Make Abbreviation"
					              ref={carMakesStore.newCarMakeAbrv}
				          />
                  <button className="buttonUpdate">Save New Car Make</button>
                </form>
            
			      <Link to="/"><button className="buttonDelete">Close New Make Editor</button></Link>
    </div>
  );
};
export default inject('carMakesStore') (observer(AddCarMake));