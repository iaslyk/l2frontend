import HeaderPage from '../layouts/header';
import FooterPage from '../layouts/footer';
import CarMakesPage from '../pages/carMakes/carMakesPage';
import CarModelsPage from '../pages/carModels/carModelsPage'
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import './App.css';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <HeaderPage />
        <Switch>
          <Route path="/" exact component={CarMakesPage}/>
          <Route path="/carmodels" component={CarModelsPage} />
        </Switch>
      <FooterPage />

    </div>
    </BrowserRouter>
  );
}

export default App;
