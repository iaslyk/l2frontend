import carStore from '../stores/carStores';
import CarModelList from '../common/carModels'
import CarMakeList from '../common/carMakes';
import './App.css';

function App() {
  const store = new carStore();
  return (
    <div className="App">
      <h2>Car Makes</h2>
      <CarMakeList store={store} />
      <hr />
      <hr />
      <hr2>Car Models</hr2>
      <CarModelList store={store} />
    </div>
  );
}

export default App;
