import HeaderPage from './header';
import FooterPage from './footer';
import CarMakesPage from '../pages/carMakes/carMakesPage';
import AddCarMake from '../pages/carMakes/addCarMakes';
import EditCarMake from '../pages/carMakes/editCarMake'
import EditCarModel from '../pages/carModels/editCarModel'
import CarModelsPage from '../pages/carModels/carModelsPage'
import AddCarModel from '../pages/carModels/addCarModels';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import './App.css';
import { Component } from 'react';


class App extends Component {

  render() {
  return (
    <BrowserRouter>
    <div className="App">
      <HeaderPage />
        <Switch>
          <Route exact path="/" component={CarMakesPage}/>
          <Route path="/carsMake/:id" component={EditCarMake}/>
          <Route exact path="/addcarmake" component={AddCarMake} />
          <Route exact path="/carsModel" component={CarModelsPage} />
          <Route path="/carsModel/:id" component={EditCarModel}/>
          <Route exact path="/addcarmodel" component={AddCarModel} />
        </Switch>
      <FooterPage />
    </div>
    </BrowserRouter>
  );
}
}


export default App;
