import React from 'react';
import { inject, observer } from 'mobx-react';
import { Link } from 'react-router-dom';


const EditCarMake = ({editCarMakeStore, id}) => {
  
  return (
        <div className="App">
                
                <h2>Edit {editCarMakeStore.carsMakeData.carsMake[id].carMakeName}</h2>
                    <form className="addCarMake" >                      
                      <input className="addInput"
                                      type="text"
                                      defaultValue={editCarMakeStore.carsMakeData.carsMake[id].carMakeName}
                                      ref={editCarMakeStore.editCarMakeName}
                              />
                              <input className="addInput" 
                                      type="text"
                                      defaultValue={editCarMakeStore.carsMakeData.carsMake[id].carMakeAbrv}
                                      ref={editCarMakeStore.editCarMakeAbrv}                      
                              />
                              <br />
                      <button className="buttonUpdate" onClick={() => editCarMakeStore.editCarMake(this.props.match.params.id)}><Link to="/">Save Car Make Edit</Link></button>

                    </form>

                      <Link to="/"><button className="buttonDelete">Close Make Editor</button></Link>
        </div>
      );}

    
export default inject(editCarMakeStore => ({editCarMakeStore: editCarMakeStore})) (observer(EditCarMake));
