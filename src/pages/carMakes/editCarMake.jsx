import React from 'react';
import { inject, observer } from 'mobx-react';
import { Link } from 'react-router-dom';


class EditCarMake extends React.Component {
  
  render(){
  return (
        <div className="App">
                
                <h2>Edit {this.props.stores.carMakesStore.carsMakeData.carsMake[this.props.match.params.id].carMakeName}</h2>
                    <form className="addCarMake" >                      
                      <input className="addInput"
                                      type="text"
                                      defaultValue={this.props.stores.carMakesStore.carsMakeData.carsMake[this.props.match.params.id].carMakeName}
                                      ref={this.props.stores.carMakesStore.editCarMakeName}
                              />
                              <input className="addInput" 
                                      type="text"
                                      defaultValue={this.props.stores.carMakesStore.carsMakeData.carsMake[this.props.match.params.id].carMakeAbrv}
                                      ref={this.props.stores.carMakesStore.editCarMakeAbrv}                      
                              />
                              <br />
                      <button className="buttonUpdate" onClick={() => this.props.stores.carMakesStore.editCarMake(this.props.match.params.id)}><Link to="/">Save Car Make Edit</Link></button>

                    </form>

                      <Link to="/"><button className="buttonDelete">Close Make Editor</button></Link>
        </div>
      );}
    };

    
export default inject('stores') (observer(EditCarMake));
