import React from 'react';
import { inject, observer } from 'mobx-react';
import { Link, useParams } from 'react-router-dom';

const EditCarMake = ({ stores }) => {
    
    const { makeId } = useParams();

    const edit = (e) => {
        e.preventDefault();
        stores.carMakesStore.editCarMake(stores.carMakesStore.carMakeNameEdit.current.value)
      }
      return (
        <div className="App">
                
                <h2>Edit {stores.carMakesStore.carsMake[makeId].carMakeName}</h2>
                <p className="storeDetails">{stores.carMakesStore.storeDetails}</p>
                    <form className="addCarMake" >
                      <input className="addInput"
                                      type="text"
                                      defaultValue={stores.carMakesStore.carsMake[makeId].carMakeName}
                                      ref={stores.carMakesStore.carMakeNameEdit}
                                    
                              />
                              <input className="addInput" 
                                      type="text"
                                      defaultValue={stores.carMakesStore.carsMake[makeId].carMakeAbrv}
                                      ref={stores.carMakesStore.carMakeAbrvEdit}
                            
                              />
                      <button className="buttonUpdate" onClick={edit}><Link to="/">Save Car Make Edit</Link></button>
                    </form>
                    
                      <Link to="/"><button className="buttonDelete">Close Make Editor</button></Link>
        </div>
      );
    };

export default inject('stores') (observer(EditCarMake));
