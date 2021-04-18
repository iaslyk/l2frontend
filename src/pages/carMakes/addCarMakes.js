import React from 'react';
import {inject, observer} from 'mobx-react'
import { Link } from 'react-router-dom';

const AddCarMake = ({carMakesStore}) => {
  const add = (e) => {
    e.preventDefault();
    carMakesStore.createCarMake(carMakesStore.newCarMakeName.current.value)
  }
  return (
    <div className="App">
            
            <h2 >Add Car Make</h2>
            <p className="storeDetails">{carMakesStore.storeDetails}</p>
                <form className="addCarMake" >
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
                  <button className="buttonUpdate" onClick={add}><Link to="/">Save New Car Make</Link></button>
                </form>
                
			      <Link to="/"><button className="buttonDelete">Close New Make Editor</button></Link>
    </div>
  );
};

export default inject('carMakesStore') (observer(AddCarMake));