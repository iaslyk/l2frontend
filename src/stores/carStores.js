import {
    action,
    computed,
    makeObservable,
    observable,
    autorun,
    runInAction
} from 'mobx';




class carStore {
    carsMake = [];
    carsModel = [];

    constructor(){
        makeObservable(this, {
            carsMake: observable,
            carsModel: observable,
            totalCarsMake: computed,
            totalCarsModel: computed,
            storeDetails: computed,
            getCarsModelByMake: action,
            createCarMake: action,
            createCarModel: action,
            updateCarMake: action,
            updateCarModel: action,
            deleteCarMake: action,
            deleteCarModel: action,
            assignCarModelToCarMake: action
        });
        autorun(this.logStoreDetails);
    }

    get totalCarsMake() {
        return this.carsMake.length;
    }

    get totalCarsModel() {
        return this.carsModel.length;
    }

    getCarsModelByMake(carMakeId) {
        return this.carsModel.filter((carModel) => {
            return carModel.carMake && carModel.carMake.id === carMakeId;
        });
    }

    createCarMake(carMake = {id: 0, carMakeName: "", carMakeAbrv: ""}) {
        this.carsMake.push(carMake);
    }

    createCarModel(carModel = {id: 0, carMakeId: null, carModelName: "", carModelFuel: "", carModelInfo: ""}) {
        this.carsModel.push(carModel);
    }

    updateCarMake(carMakeId, update) {
        const carMakeIndexAtId = this.carsMake.findIndex((carMake) => carMake.id === carMakeId);
        if (carMakeIndexAtId > -1 && update) {
            this.carsMake[carMakeIndexAtId] = update;
        }
    }

    updateCarModel(carModelId, update) {
        const carModelIndexAtId = this.carsModel.findIndex((carModel) => carModel.id === carModelId);
        if (carModelIndexAtId > -1 && update) {
            this.carsModel[carModelIndexAtId] = update;
        }
    }

    deleteCarMake(carMakeId) {
        const carMakeIndexAtId = this.carsMake.findIndex((carMake) => carMake.id === carMakeId);
        if (carMakeIndexAtId > -1) {
            this.carsMake.splice(carMakeIndexAtId, 1)
        }
    }

    deleteCarModel(carModelId) {
        const carModelIndexAtId = this.carsModel.findIndex((carModel) => carModel.id === carModelId);
        if (carModelIndexAtId > -1) {
            this.carsModel.splice(carModelIndexAtId, 1)
        }
    }
    
    // Assign car models to car makes
    assignCarModelToCarMake(carModelId, carMakeId) {
        const carMakeIndexAtId = this.carsMake((carMake) => carMake.id === carMakeId);
        const carModelIndexAtId = this.carsModel((carModel) => carModel.id === carModelId);
        if (carMakeIndexAtId > -1 && carModelIndexAtId > -1) {
            this.carsModel[carModelIndexAtId].carModel = this.carsMake[carModelIndexAtId];
        }
    }

    get storeDetails() {
        return `We have ${this.totalCarsMake} car makes and ${this.totalCarsModel} car models`
    }

    logStoreDetails = () => {
        console.log(this.storeDetails);
    }

    prefetchData = () => {
        const carsMake = [
            { id: "0", carMakeName: "Bayerische Motoren Werke AG", carMakeAbrv: "BMW"},
            { id: "1", carMakeName: "Volkswagen", carMakeAbrv: "VW"},
            { id: "2", carMakeName: "Toyota Motor Corporation", carMakeAbrv: "Toyota"},
            { id: "3", carMakeName: "Rimac Automobili", carMakeAbrv: "Rimac"},
            { id: "4", carMakeName: "General Motors Company", carMakeAbrv: "GM"},
            { id: "5", carMakeName: "Fiat Chrysler Automobiles N.V.", carMakeAbrv: "FCA"},
        ];
        
    }
};

export default carStore;



