import React from 'react';
import { Link } from 'react-router-dom';
import '../../layouts/App.css';
import { observer } from 'mobx-react';

function AddCarMake(carMakesStore) {
  const add = (e) => {
    e.preventDefault();
    carMakesStore.createCarMake(carMakesStore.carMakeName.current.value)
  }

  return (
    <div className="App">
      
            <h2 className="addCarMake">Add Car Make</h2>
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
                </form>
            <button className="button saveNewButton" onClick={add}><Link to="/">Save New CarMake</Link></button>
			      <Link to="/"><button className="button closeNewButton">Close New Vehicle Editor</button></Link>
    </div>
  );
};
export default observer(AddCarMake);