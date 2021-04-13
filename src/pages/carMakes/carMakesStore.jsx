import {
    action,
    computed,
    makeObservable,
    observable,
    autorun
} from 'mobx';


class carMakesStore {
    carsMake = [            
        { id: "0", carMakeName: "Bayerische Motoren Werke AG", carMakeAbrv: "BMW"},
        { id: "1", carMakeName: "Volkswagen", carMakeAbrv: "VW"},
        { id: "2", carMakeName: "Toyota Motor Corporation", carMakeAbrv: "Toyota"},
        { id: "3", carMakeName: "Rimac Automobili", carMakeAbrv: "Rimac"},
        { id: "4", carMakeName: "General Motors Company", carMakeAbrv: "GM"},
        { id: "5", carMakeName: "Fiat Chrysler Automobiles N.V.", carMakeAbrv: "FCA"}];
    

    constructor(){
        makeObservable(this, {
            carsMake: observable,
            totalCarsMake: computed,
            storeDetails: computed,
            createCarMake: action,
            updateCarMake: action,
            deleteCarMake: action,
                });
        autorun(this.logStoreDetails);

    }

    // Get total number of car makes
    get totalCarsMake() {
        return this.carsMake.length;
    }


    // Create car make
    createCarMake = (id, carMakeName, carMakeAbrv) => {
        this.carsMake.push(id, carMakeName, carMakeAbrv
        );
    }


    // Update car make
    updateCarMake(carMakeId, update) {
        const carMakeIndexAtId = this.carsMake.findIndex((carMake) => carMake.id === carMakeId);
        if (carMakeIndexAtId > -1 && update) {
            this.carsMake[carMakeIndexAtId] = update;
            return this.carsMake[carMakeIndexAtId];
        }
    }


    // Delete car make
    deleteCarMake(carMakeId) {
        const carMakeIndexAtId = this.carsMake.findIndex((carMake) => carMake.id === carMakeId);
        if (carMakeIndexAtId > -1) {
            this.carsMake.splice(carMakeIndexAtId, 1);
        }
    }

        
    // Get numbers of car makes, and car models we have
    get storeDetails() {
        return `We have ${this.totalCarsMake} car makes.`
    }

    logStoreDetails = () => {
        console.log(this.storeDetails);
    }


};

export default carMakesStore;



