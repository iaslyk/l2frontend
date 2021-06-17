import CarMakesStore from '../pages/carMakes/carMakesStore';
import AddCarMakeStore from '../pages/carMakes/addCarMakesStore'
import CarModelsStore from '../pages/carModels/carModelsStore'


export function initStores(){

    const carMakesStore = new CarMakesStore();
    const addCarMakeStore = new AddCarMakeStore()
    const carModelsStore = new CarModelsStore();


    return {
        carMakesStore,
        addCarMakeStore,
        carModelsStore
    }
}
