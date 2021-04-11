import CarMakeList from './carMakes';
import carMakesStore from './carMakesStore';
import '../../layouts/App.css';

function CarMakesPage() {
  const carMakeStore = new carMakesStore();
  return (
    <div className="App">
            <h2 className="storeMake">Car Makes</h2>
            <CarMakeList store={carMakeStore} />
    </div>
  );
}

export default CarMakesPage;