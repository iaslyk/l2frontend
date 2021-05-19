import {
    action,
    computed,
    makeObservable,
    observable,
} from 'mobx';
import React from 'react';
import CarsMakeService from '../../common/carsMakeService/carsMakeServices'

class CarMakesStore {
    constructor(){
        makeObservable(this, {
            lastId: observable,
            newCarMakeName: observable,
            newCarMakeAbrv: observable,
            totalCarsMake: computed,
            storeDetails: computed,
            createCarMake: action,
            deleteCarMake: action,
            editCarMake: action,
                })

    }

    lastId = this.carsMake.slice(-1)[0].id;
    newCarMakeName = React.createRef();
    newCarMakeAbrv = React.createRef();

    // Get total number of car makes
    get totalCarsMake() {
        return this.carsMake.length;
    }


    // Create car make
    createCarMake = () => {
        this.carsMake.push({
            id: ++this.lastId,
            carMakeName: this.newCarMakeName.current.value, 
            carMakeAbrv: this.newCarMakeAbrv.current.value}
        );
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

    editCarMake(carMakeName, carMakeAbrv){
        this.carsMake.carMakeName = carMakeName;
        this.carsMake.carMakeAbrv = carMakeAbrv;
    }

    logStoreDetails = () => {
        console.log(this.storeDetails);
    }


};

export default new CarMakesStore();



