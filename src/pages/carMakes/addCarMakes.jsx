import React from 'react';
import {inject, observer} from 'mobx-react'
import { Link } from 'react-router-dom';

const AddCarMake = ({carMakesStore}) => {
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
                </form>
            <button className="buttonUpdate" onClick={() => carMakesStore.createCarMake(carMakesStore.newCarMakeName.current.value)}><Link to="/">Save New Car Make</Link></button>
			      <button className="buttonDelete"><Link to="/">Close New Make Editor</Link></button>
    </div>
  );
};

export default inject('carMakesStore') (observer(AddCarMake));