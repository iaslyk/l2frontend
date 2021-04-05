import carStore from '../stores/carStores';
import CarModelList from '../common/carModels'
import CarMakeList from '../common/carMakes';
import HeaderPage from '../layouts/header';
import FooterPage from '../layouts/footer';
import './App.css';

function App() {
  const store = new carStore();
  return (
    <div className="App">
      <HeaderPage />
      <h2 className="storeMake">Car Makes</h2>
      <CarMakeList store={store} />
      <hr />
      <hr />
      <h2 className="storeModelTitle">Car Models</h2>
      <CarModelList store={store} />
      <FooterPage />
    </div>
  );
}

export default App;
