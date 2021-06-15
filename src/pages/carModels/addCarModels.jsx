import { inject, observer } from 'mobx-react';
import React from 'react';
import { Link } from 'react-router-dom';


class AddCarModel extends React.Component {
  
  render () {
    return (
      <div className="App">
              <h2 className="addCarMake">Add Car Model</h2>
              <p className="storeDetails">{this.props.stores.carModelsStore.storeDetails}</p>
                  <form className="addCarMake">
                    
                    <input className="addInput"
                          type="text"
                          placeholder="Model Name"
                          ref={this.props.stores.carModelsStore.newCarModelName}
                    />
                    <input className="addInput"
                          type="text"
                          placeholder="Model Fuel"
                          ref={this.props.stores.carModelsStore.newCarModelFuel}
                    />
                    <br />
                    <input className="addInputInfo"
                          type="text"
                          placeholder="Model Info"
                          ref={this.props.stores.carModelsStore.newCarModelInfo}
                    />
                    <h3>Choose a Car Make:</h3>
                    <select className="dropdown" onChange={this.props.stores.carMakesStore.carsMakeData.carsMake.id} ref={this.props.stores.carModelsStore.carMakeModel}>
                      {this.props.stores.carMakesStore.carsMakeData.carsMake.map((carMake) => {
                        return (
                          <option  key={carMake.id}>
                            {carMake.carMakeAbrv}
                          </option>
                        )
                      })}
                      
                    </select>
                  </form>
                  <br></br>
              <button className="buttonUpdate" onClick={() => this.props.stores.carModelsStore.createCarModel(this.props.stores.carModelsStore.newCarModelName.current.value)}><Link to="/carsModel">Save New Car Model</Link></button>
              <button className="buttonDelete"><Link to="/carsModel">Close New Model Editor</Link></button>
      </div>
    );}
};


export default inject('stores') (observer(AddCarModel));
