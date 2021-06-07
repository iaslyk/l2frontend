import React from 'react';
import { inject, observer } from 'mobx-react';
import { Link } from 'react-router-dom';

class EditCarModel extends React.Component{
      render() {
      return (
        <div className="App">
                
                <h2>Edit {this.props.stores.carModelsStore.carsModelData.carsModel[this.props.match.params.id].carModelName} </h2>
                <p className="storeDetails">{this.props.stores.carModelsStore.storeDetails}</p>
                    <form className="addCarMake" >
                      <input className="addInput"
                                      type="text"
                                      defaultValue={this.props.stores.carModelsStore.carsModelData.carsModel[this.props.match.params.id].carModelName}
                                      ref={this.props.stores.carModelsStore.editCarModelName}                                      
                              />
                              <input className="addInput"
                                      type="text"
                                      defaultValue={this.props.stores.carModelsStore.carsModelData.carsModel[this.props.match.params.id].carModelFuel}
                                      ref={this.props.stores.carModelsStore.editCarModelFuel}                                                                            
                              />
                              <input className="addInput"
                                      type="text"
                                      defaultValue={this.props.stores.carModelsStore.carsModelData.carsModel[this.props.match.params.id].carModelInfo}
                                      ref={this.props.stores.carModelsStore.editCarModelInfo}                                      
                                      
                              />
                              <h3>Choose a Car Make:</h3>
                      <select className="dropdown" onChange={this.props.stores.carMakesStore.carsMakeData.carsMake.id} ref={this.props.stores.carModelsStore.carMakeModel}>
                      {this.props.stores.carMakesStore.carsMakeData.carsMake.map((carMake) => {
                        return (
                          <option key={carMake.id}>{carMake.carMakeAbrv}</option>
                        )
                      })}
                      </select>
                      <button className="buttonUpdate" onClick={() => this.props.stores.carModelsStore.editCarModel(this.props.stores.carModelsStore.editCarModelName)}><Link to="/carsModels">Save Car Model Edit</Link></button>
                    </form>
                    
                      <Link to="/carmodels"><button className="buttonDelete">Close Model Editor</button></Link>
        </div>
      );
}    
};

export default inject('stores') (observer(EditCarModel));
