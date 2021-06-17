import CarMakesStore from '../pages/carMakes/carMakesStore';
import AddCarMakeStore from '../pages/carMakes/addCarMakeStore'
import CarModelsStore from '../pages/carModels/carModelsStore'
import AddCarModelStore from '../pages/carModels/addCarModelStore'


export function initStores(){

    const carMakesStore = new CarMakesStore();
    const addCarMakeStore = new AddCarMakeStore()
    const carModelsStore = new CarModelsStore();
    const addCarModelStore = new AddCarModelStore()


    return {
        carMakesStore,
        addCarMakeStore,
        carModelsStore,
        addCarModelStore
    }
}
