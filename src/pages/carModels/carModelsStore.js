import {
    action,
    computed,
    makeObservable,
    observable,
} from 'mobx';
import React from 'react';


class CarModelsStore {
    constructor(carsModel){
        makeObservable(this, {
            carsModel: observable,
            lastId: observable,
            newCarModelName: observable,
            newCarModelFuel: observable,
            newCarModelInfo: observable,
            totalCarsModel: computed,
            createCarModel: action,
            updateCarModel: action,
            deleteCarModel: action,
            sortedModelNames: action,
            sortedModelFuel: action,
            reverseSortedModelNames: action,
            reverseSortedModelFuel: action,
            carMakeModel: observable,
            currentPage: observable,
            modelsPerPage: observable,
            indexOfFirstModel: observable,
            indexOfLastModel: observable,
            setPage: action
        });
    }

    carsModel = [
        {id: 0, carMake: 0, carModelName: "Z4", carModelFuel: "Petrol", carModelInfo: "There are no more limits to driving pleasure in the BMW Z4 Roadster. A roadster that could not be any better: open, sporty and thrilling. With powerful driving dynamics and progressive design, it has only one aim: freedom between the road and sky."},
        {id: 1, carMake: 0, carModelName: "i3", carModelFuel: "Electric", carModelInfo: "Get in and experience the future at your fingertips. The BMW i3 is full of innovative technologies it can use to confidently master your day-to-day life. It is always ready for the road and to explore new avenues. With style and a trend-setting design for electrifying driving pleasure."},
        {id: 2, carMake: 0, carModelName: "530e", carModelFuel: "Hybrid ",carModelInfo: "A model athlete in the discipline of sustainability. The BMW 5 Series Sedan plug-in hybrid inspires thanks to the combination of powerful petrol engine, high-voltage battery and an electric motor from BMW eDrive technology that offers an impressive performance while simultaneously lowering fuel consumption and reducing CO2 emissions."},
        {id: 3, carMake: 0, carModelName: "X1", carModelFuel: "Diesel", carModelInfo: "Milestones ahead: the BMW X1 has come to set standards. Its eagerness for action is shown above all in its athletic design. At first glance, it is an X model through and through: its exterior is characterised by short overhangs and a long wheelbase typical of a SAV (Sports Activity Vehicle). It makes its ambitions clear with convincing dynamics and agility."},
        {id: 4, carMake: 3, carModelName: "Concept_Two", carModelFuel: "Electric", carModelInfo: "The Rimac C_Two: a pure electric GT hypercar as capable on track as it is crossing continents. A car as bespoke as it is user-friendly. A new breed of hypercar."},
        {id: 5, carMake: 1, carModelName: "Arteon Shooting Brake", carModelFuel: "Hybrid", carModelInfo: "The Arteon Shooting brake offers extra space with an impressive 595-litre boot and enough legroom to keep your rear passengers comfortable. Also available as a plug-in hybrid, the Arteon Shooting Brake comes with a wide variety of tech features and gives you an incredibly smooth drive, particularly on the motorway."},
        {id: 6, carMake: 1, carModelName: "Eos", carModelFuel: "Petrol", carModelInfo: "The Volkswagen Eos is a sport compact cabriolet coupé produced by the German automaker Volkswagen from 2006 to 2015. Assembled at AutoEuropa in Portugal, it was a convertible only compact coupé introduced as the successor of the Volkswagen Golf Cabriolet."},
        {id: 7, carMake: 2, carModelName: "Corolla Hybrid", carModelFuel: "Hybrid", carModelInfo: "Awarded Green Car Journal's 2020 Green Car of the Year, Corolla Hybrid even comes with an enhanced Hybrid Battery Warranty that lasts for 10 years from date of first use, or 150,000 miles, whichever comes first."},
        {id: 8, carMake: 2, carModelName: "Prius Prime", carModelFuel: "Hybrid", carModelInfo: "Placeholder"},
        {id: 9, carMake: 2, carModelName: "Avalon", carModelFuel: "Hybrid", carModelInfo: "Placeholder"},
        {id: 10, carMake: 4, carModelName: "Chevrolet Sequel", carModelFuel: "Hydrogen fuel cell", carModelInfo: "The Chevrolet Sequel was a purpose-built hydrogen fuel cell-powered concept car and sport utility vehicle from Chevrolet, employing the then latest generation of General Motors' fuel cell technology"},
        {id: 11, carMake: 4, carModelName: "Chevrolet Bolt", carModelFuel: "Electric", carModelInfo: "The Chevrolet Bolt or Chevrolet Bolt EV is a front-motor, five-door all-electric small hatchback marketed by Chevrolet; developed and manufactured in partnership with LG Corporation"},
        {id: 12, carMake: 5, carModelName: "124 Spider", carModelFuel: "Petrol", carModelInfo: "Exactly 50 years later, the iconic 1960s design is back in a roadster created for pure driving pleasure: the Fiat 124 Spider."},
        {id: 13, carMake: 5, carModelName: "500", carModelFuel: "Electric", carModelInfo: "The all New 500 will be the first small car to bring Level 2 Autonomous Driving, which means a superior level of safety in the urban mobility. Your car will be your trusted co-driver: it will accelerate, brake and keep the lane autonomously."},
        ];
    
    lastId = this.carsModel.slice(-1)[0].id;

    newCarModelName = React.createRef();
    newCarModelFuel = React.createRef();
    newCarModelInfo = React.createRef();
    carMakeModel = React.createRef();

    // Get total number of car makes
    get totalCarsMake() {
        return this.carsMake.length;
    }

    // Get total number of car models
    get totalCarsModel() {
        return this.carsModel.length;
    }


    // Create car model
    createCarModel = (id, carModelName, carModelFuel, carModelInfo, carMake) => {
        this.carsModel.push({
            id: ++this.lastId,
            carModelName: this.newCarModelName.current.value,
            carModelFuel: this.newCarModelFuel.current.value,
            carModelInfo: this.newCarModelInfo.current.value,
            carMake: this.carMakeModel.current.value
        });
    }



    // Update car model
    updateCarModel(carModelId, update) {
        const carModelIndexAtId = this.carsModel.findIndex((carModel) => carModel.id === carModelId);
        if (carModelIndexAtId > -1 && update) {
            this.carsModel[carModelIndexAtId] = update;
            return this.carsModel[carModelIndexAtId]
        }
    }

 

    // Delete car model
    deleteCarModel(carModelId) {
        const carModelIndexAtId = this.carsModel.findIndex((carModel) => carModel.id === carModelId);
        if (carModelIndexAtId > -1) {
            this.carsModel.splice(carModelIndexAtId, 1)
        }
    }
    
        
    // Get numbers of car makes, and car models we have
    get storeDetails() {
        return `We have ${this.totalCarsModel} car models`
    }

    logStoreDetails = () => {
        console.log(this.storeDetails);
    }

    sortedModelNames() {
        return this.carsModel.sort((a, b) => ((b.carModelName.toLowerCase() < a.carModelName.toLowerCase())))
    };

    sortedModelFuel() {
        return this.carsModel.sort((a, b) => ((b.carModelFuel.toLowerCase() < a.carModelFuel.toLowerCase())))
    };

    reverseSortedModelNames() {
        return this.carsModel.sort((a, b) => ((b.carModelName.toLowerCase() > a.carModelName.toLowerCase())))
    };

    reverseSortedModelFuel() {
        return this.carsModel.sort((a, b) => ((b.carModelFuel.toLowerCase() > a.carModelFuel.toLowerCase())))
    };

    currentPage = 1;
    modelsPerPage = 5;
    indexOfLastModel = this.currentPage * this*this.modelsPerPage;
    indexOfFirstModel = this.indexOfLastModel - this.modelsPerPage;
    setPage = (pageNumber) => {
        this.currentPage = pageNumber;
        this.indexOfFirstModel = this.indexOfLastModel - this.modelsPerPage;
        this.indexOfLastModel = this.currentPage * this*this.modelsPerPage;
    }

};

export default new CarModelsStore();



