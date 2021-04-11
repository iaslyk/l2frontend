import carModelsStore from './carModelsStore';
import CarModelList from './carModels'
import '../../layouts/App.css';

function CarModelsPage() {
  const carModelStore = new carModelsStore();
  return (
    <div className="App">
        <h2 className="storeModelTitle">Car Models</h2>
       <CarModelList store={carModelStore} />
    </div>
  );
}

export default CarModelsPage;