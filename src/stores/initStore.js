import CarMakesStore from '../pages/carMakes/carMakesStore';
import AddCarMakeStore from '../pages/carMakes/addCarMakeStore'
import EditCarMakeStore from '../pages/carMakes/editCarMakeStore';
import CarModelsStore from '../pages/carModels/carModelsStore'
import AddCarModelStore from '../pages/carModels/addCarModelStore'
import EditCarModelStore from '../pages/carModels/editCarModelStore'


export function initStores(){

    const carMakesStore = new CarMakesStore();
    const addCarMakeStore = new AddCarMakeStore()
    const editCarMakeStore = new EditCarMakeStore()
    const carModelsStore = new CarModelsStore();
    const addCarModelStore = new AddCarModelStore()
    const editCarModelStore =new EditCarModelStore()


    return {
        carMakesStore,
        addCarMakeStore,
        editCarMakeStore,
        carModelsStore,
        addCarModelStore,
        editCarModelStore
    }
}
