import React from 'react';
import { inject, observer } from 'mobx-react'
import { Link } from 'react-router-dom';

const AddCarMake = ({stores}) => {
  return (
    <div className="App">
            
            <h2 >Add Car Make</h2>
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
				<br />
            <button className="buttonUpdate" onClick={() => stores.carMakesStore.createCarMake(stores.carMakesStore.newCarMakeName.current.value)}><Link to="/">Save New Car Make</Link></button>
			      <button className="buttonDelete"><Link to="/">Close New Make Editor</Link></button>
    </div>
  );
};

export default inject('stores') (observer(AddCarMake));