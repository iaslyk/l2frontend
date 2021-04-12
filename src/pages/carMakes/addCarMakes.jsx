import React from 'react';
import { Link } from 'react-router-dom';
import '../../layouts/App.css';

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
            <button className="buttonUpdate" onClick={add}><Link to="/">Save New Car Make</Link></button>
			      <Link to="/"><button className="buttonDelete">Close New Make Editor</button></Link>
    </div>
  );
};
export default AddCarMake;