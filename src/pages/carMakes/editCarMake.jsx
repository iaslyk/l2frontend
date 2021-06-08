import React from 'react';
import { inject, observer } from 'mobx-react';
import { Link } from 'react-router-dom';

class EditCarMake extends React.Component {
  render(){
  return (
        <div className="App">
                
                <h2>Edit {this.props.carMakesStore.carsMakeData.carsMake[this.props.match.params.id].carMakeName}</h2>
                    <form className="addCarMake" >                      
                      <input className="addInput"
                                      type="text"
                                      defaultValue={this.props.carMakesStore.carsMakeData.carsMake[this.props.match.params.id].carMakeName}
                                      ref={this.props.carMakesStore.editCarMakeName}
                              />
                              <input className="addInput" 
                                      type="text"
                                      defaultValue={this.props.carMakesStore.carsMakeData.carsMake[this.props.match.params.id].carMakeAbrv}
                                      ref={this.props.carMakesStore.editCarMakeAbrv}                      
                              />
                                                  <br />

                              <button className="buttonUpdate" onChange={() => this.carMakesStore.editCarMake()}>Save Car Make Edit</button>
                    </form>
                      <Link to="/"><button className="buttonDelete">Close Make Editor</button></Link>
        </div>
      );}
    };

export default inject('carMakesStore') (observer(EditCarMake));
