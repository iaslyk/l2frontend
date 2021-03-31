import carStore from '../stores/carStores';
import CarMakeList from '../common/carMakes';
import './App.css';

function App() {
  const store = new carStore();
  return (
    <div className="App">
      <CarMakeList store={store} />
    </div>
  );
}

export default App;
