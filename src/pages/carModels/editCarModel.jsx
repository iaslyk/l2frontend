import React from 'react';
import { inject, observer } from 'mobx-react';
import { Link } from 'react-router-dom';


class EditCarModel extends React.Component{

      render() {
      return (
        <div className="App">
                
                <h2>Edit {this.carsModelData.carsModel[this.props.match.params.id].carModelName} </h2>
                <p className="storeDetails">{this.storeDetails}</p>
                    <form className="addCarMake" >
                      <input className="addInput"
                                      type="text"
                                      defaultValue={this.carsModelData.carsModel[this.props.match.params.id].carModelName}
                                      ref={this.editCarModelName}                                      
                              />
                              <input className="addInput"
                                      type="text"
                                      defaultValue={this.carsModelData.carsModel[this.props.match.params.id].carModelFuel}
                                      ref={this.editCarModelFuel}                                                                            
                              />
                              <br />
                              <input className="addInputInfo"
                                      type="text"
                                      defaultValue={this.carsModelData.carsModel[this.props.match.params.id].carModelInfo}
                                      ref={this.editCarModelInfo}                                      
                                      
                              />
                              <h3>Choose a Car Make:</h3>
                      <select className="dropdown" onChange={this.carsMakeData.carsMake.id} ref={this.editCarMakeModel}>
                      {this.carsMakeData.carsMake.map((carMake) => {
                        return (
                          <option key={carMake.id}>{carMake.id}</option>
                        )
                      })}
                      </select>
                      <br />
                      <button className="buttonUpdate" onClick={() => this.editCarModel(this.props.match.params.id)}><Link to="/carsModels">Save Car Model Edit</Link></button>
                    </form>
                    
                      <Link to="/carmodels"><button className="buttonDelete">Close Model Editor</button></Link>
        </div>
      );
}    
};


export default inject(stores => ({editCarModelStore: stores.editCarModelStore, carMakeId: stores.carMakesStore.id})) (observer(EditCarModel));
