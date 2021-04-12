import HeaderPage from '../layouts/header';
import FooterPage from '../layouts/footer';
import CarMakesPage from '../pages/carMakes/carMakesPage';
import AddCarMake from '../pages/carMakes/addCarMakes';
import CarModelsPage from '../pages/carModels/carModelsPage'
import AddCarModel from '../pages/carModels/addCarModels';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import './App.css';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <HeaderPage />
        <Switch>
          <Route path="/" exact component={CarMakesPage}/>
          <Route path="/addcarmake" component={AddCarMake} />
          <Route path="/carmodels" component={CarModelsPage} />
          <Route path="/addcarmodel" component={AddCarModel} />
        </Switch>
      <FooterPage />

    </div>
    </BrowserRouter>
  );
}

export default App;
