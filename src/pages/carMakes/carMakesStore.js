import {
    action,
    computed,
    makeObservable,
    observable,
} from 'mobx';
import React from 'react';

class CarMakesStore {
    constructor(){
        makeObservable(this, {
            carsMake: observable,
            lastId: observable,
            carMakeNameEdit: observable,
            carMakeAbrvEdit: observable,
            newCarMakeName: observable,
            newCarMakeAbrv: observable,
            totalCarsMake: computed,
            storeDetails: computed,
            createCarMake: action,
            updateCarMake: action,
            deleteCarMake: action,
            editCarMake: action,
                })

    }

    carsMake = [            
        { id: 0, carMakeName: "Bayerische Motoren Werke AG", carMakeAbrv: "BMW"},
        { id: 1, carMakeName: "Volkswagen", carMakeAbrv: "VW"},
        { id: 2, carMakeName: "Toyota Motor Corporation", carMakeAbrv: "Toyota"},
        { id: 3, carMakeName: "Rimac Automobili", carMakeAbrv: "Rimac"},
        { id: 4, carMakeName: "General Motors Company", carMakeAbrv: "GM"},
        { id: 5, carMakeName: "Fiat Chrysler Automobiles N.V.", carMakeAbrv: "FCA"},
    ];

    lastId = this.carsMake.slice(-1)[0].id;
    newCarMakeName = React.createRef();
    newCarMakeAbrv = React.createRef();
    carMakeNameEdit = React.createRef();
    carMakeAbrvEdit = React.createRef();

    // Get total number of car makes
    get totalCarsMake() {
        return this.carsMake.length;
    }


    // Create car make
    createCarMake = (id, carMakeName, carMakeAbrv) => {
        this.carsMake.push({
            id: ++this.lastId,
            carMakeName: this.newCarMakeName.current.value, 
            carMakeAbrv: this.newCarMakeAbrv.current.value}
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

    editCarMake = (id) => {
        this.carsMake[id].carMakeName = this.carMakeNameEdit.current.value;
        this.carsMake[id].carMakeAbrv = this.carMakeAbrvEdit.current.value;
    }

    logStoreDetails = () => {
        console.log(this.storeDetails);
    }


};

export default new CarMakesStore();



