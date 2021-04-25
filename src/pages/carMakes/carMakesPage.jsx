import CarMakeList from './carMakeList';
import carMakesStore from './carMakesStore';
import '../../layouts/App.css';
import { Component } from 'react';
import { observer } from 'mobx-react';

class CarMakesPage extends Component {
  render(){
  return (
    <div className="App">
            <h2 className="storeMake">Car Makes</h2>
            <CarMakeList store={carMakesStore} />
    </div>
  );
}
}

export default observer(CarMakesPage);