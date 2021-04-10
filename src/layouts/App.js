import CarMakeList from '../pages/carMakes/carMakes';
import carMakesStore from '../pages/carMakes/carMakesStore';
import carModelsStore from '../pages/carModels/carModelsStore';
import CarModelList from '../pages/carModels/carModels'
import HeaderPage from '../layouts/header';
import FooterPage from '../layouts/footer';
import './App.css';

function App() {
  const carMakeStore = new carMakesStore();
  const carModelStore = new carModelsStore();
  return (
    <div className="App">
        <HeaderPage />
      <h2 className="storeMake">Car Makes</h2>
        <CarMakeList store={carMakeStore} />
      <hr />
      <hr />
      <h2 className="storeModelTitle">Car Models</h2>
       <CarModelList store={carModelStore} />
      <FooterPage />
    </div>
  );
}

export default App;
