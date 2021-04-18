import carModelsStore from './carModelsStore';
import CarModelList from './carModels'
import '../../layouts/App.css';
import { Component } from 'react';
import { observer } from 'mobx-react';

class CarModelsPage extends Component {
  render(){
  return (
    <div className="App">
        <h2 className="storeModelTitle">Car Models</h2>
       <CarModelList store={carModelsStore} />
    </div>
  );
}
}

export default (observer(CarModelsPage));