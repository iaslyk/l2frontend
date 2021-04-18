import CarMakesStore from '../pages/carMakes/carMakesStore';
import CarModelsStore from '../pages/carModels/carModelsStore'

export function initStores(){
    const carMakesStore = new CarMakesStore();
    const carModelsStore = new CarModelsStore(carMakesStore);

    return {
        carMakesStore,
        carModelsStore
    }
}
