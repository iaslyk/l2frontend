import React from 'react';
import {inject, observer} from 'mobx-react'
import { Link } from 'react-router-dom';

const AddCarMake = ({stores}) => {
  const add = (e) => {
    e.preventDefault();
    stores.carMakesStore.createCarMake(stores.carMakesStore.newCarMakeName.current.value)
  }
  return (
    <div className="App">
            
            <h2 >Add Car Make</h2>
            <p className="storeDetails">{stores.carMakesStore.storeDetails}</p>
                <form className="addCarMake" >
                  <input className="addInput"
				              	type="text"
					              placeholder="Make Name"
					              ref={stores.carMakesStore.newCarMakeName}
				          />
				          <input className="addInput"
					              type="text"
					              placeholder="Make Abbreviation"
					              ref={stores.carMakesStore.newCarMakeAbrv}
				          />   
                </form>
            <button className="buttonUpdate" onClick={add}><Link to="/">Save New Car Make</Link></button>
			      <button className="buttonDelete"><Link to="/">Close New Make Editor</Link></button>
    </div>
  );
};

export default inject('stores') (observer(AddCarMake));