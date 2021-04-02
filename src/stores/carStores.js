import {
    action,
    computed,
    makeObservable,
    observable,
    autorun
} from 'mobx';


class carStore {
    carsMake = [            
        { id: 0, carMakeName: "Bayerische Motoren Werke AG", carMakeAbrv: "BMW"},
        { id: 1, carMakeName: "Volkswagen", carMakeAbrv: "VW"},
        { id: 2, carMakeName: "Toyota Motor Corporation", carMakeAbrv: "Toyota"},
        { id: 3, carMakeName: "Rimac Automobili", carMakeAbrv: "Rimac"},
        { id: 4, carMakeName: "General Motors Company", carMakeAbrv: "GM"},
        { id: 5, carMakeName: "Fiat Chrysler Automobiles N.V.", carMakeAbrv: "FCA"}];
    carsModel = [
                {id: 0, carMakeId: 0, carModelName: "Z4", carModelFuel: "Petrol", carModelInfo: "There are no more limits to driving pleasure in the BMW Z4 Roadster. A roadster that could not be any better: open, sporty and thrilling. With powerful driving dynamics and progressive design, it has only one aim: freedom between the road and sky."},
                {id: 1, carMakeId: 0, carModelName: "i3", carModelFuel: "Electric", carModelInfo: "Get in and experience the future at your fingertips. The BMW i3 is full of innovative technologies it can use to confidently master your day-to-day life. It is always ready for the road and to explore new avenues. With style and a trend-setting design for electrifying driving pleasure."},
                {id: 2, carMakeId: 0, carModelName: "530e", carModelFuel: "Hybrid ",carModelInfo: "A model athlete in the discipline of sustainability. The BMW 5 Series Sedan plug-in hybrid inspires thanks to the combination of powerful petrol engine, high-voltage battery and an electric motor from BMW eDrive technology that offers an impressive performance while simultaneously lowering fuel consumption and reducing CO2 emissions."},
                {id: 3, carMakeId: 0, carModelName: "X1", carModelFuel: "Diesel", carModelInfo: "Milestones ahead: the BMW X1 has come to set standards. Its eagerness for action is shown above all in its athletic design. At first glance, it is an X model through and through: its exterior is characterised by short overhangs and a long wheelbase typical of a SAV (Sports Activity Vehicle). It makes its ambitions clear with convincing dynamics and agility."},
                {id: 4, carMakeId: 3, carModelName: "Concept_Two", carModelFuel: "Electric", carModelInfo: "The Rimac C_Two: a pure electric GT hypercar as capable on track as it is crossing continents. A car as bespoke as it is user-friendly. A new breed of hypercar."},
                {id: 5, carMakeId: 1, carModelName: "Arteon Shooting Brake", carModelFuel: "Hybrid", carModelInfo: "The Arteon Shooting brake offers extra space with an impressive 595-litre boot and enough legroom to keep your rear passengers comfortable. Also available as a plug-in hybrid, the Arteon Shooting Brake comes with a wide variety of tech features and gives you an incredibly smooth drive, particularly on the motorway."},
                {id: 6, carMakeId: 1, carModelName: "Eos", carModelFuel: "Petrol", carModelInfo: "The Volkswagen Eos is a sport compact cabriolet coupé produced by the German automaker Volkswagen from 2006 to 2015. Assembled at AutoEuropa in Portugal, it was a convertible only compact coupé introduced as the successor of the Volkswagen Golf Cabriolet."},
                {id: 7, carMakeId: 2, carModelName: "Corolla Hybrid", carModelFuel: "Hybrid", carModelInfo: "Awarded Green Car Journal's 2020 Green Car of the Year, Corolla Hybrid even comes with an enhanced Hybrid Battery Warranty that lasts for 10 years from date of first use, or 150,000 miles, whichever comes first."},
                {id: 8, carMakeId: 2, carModelName: "Prius Prime", carModelFuel: "Hybrid", carModelInfo: "Placeholder"},
                {id: 9, carMakeId: 2, carModelName: "Avalon", carModelFuel: "Hybrid", carModelInfo: "Placeholder"},
                {id: 10, carMakeId: 4, carModelName: "Chevrolet Sequel", carModelFuel: "Hydrogen fuel cell", carModelInfo: "The Chevrolet Sequel was a purpose-built hydrogen fuel cell-powered concept car and sport utility vehicle from Chevrolet, employing the then latest generation of General Motors' fuel cell technology"},
                {id: 11, carMakeId: 4, carModelName: "Chevrolet Bolt", carModelFuel: "Electric", carModelInfo: "The Chevrolet Bolt or Chevrolet Bolt EV is a front-motor, five-door all-electric small hatchback marketed by Chevrolet; developed and manufactured in partnership with LG Corporation"},
                {id: 12, carMakeId: 5, carModelName: "124 Spider", carModelFuel: "Petrol", carModelInfo: "Exactly 50 years later, the iconic 1960s design is back in a roadster created for pure driving pleasure: the Fiat 124 Spider."},
                {id: 13, carMakeId: 5, carModelName: "500", carModelFuel: "Electric", carModelInfo: "The all New 500 will be the first small car to bring Level 2 Autonomous Driving, which means a superior level of safety in the urban mobility. Your car will be your trusted co-driver: it will accelerate, brake and keep the lane autonomously."}
                ];

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
            assignCarMakeToCarModel: action,
            sortedModelNames: action,
            sortDirection: observable,
            sortedModelFuel: action,
            sortFuelDirection: observable
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
        return carMake;
    }

    createCarModel(carModel = {id: 0, carMakeId: null, carModelName: "", carModelFuel: "", carModelInfo: ""}) {
        this.carsModel.push(carModel);
        return carModel;
    }

    updateCarMake(carMakeId, update) {
        const carMakeIndexAtId = this.carsMake.findIndex((carMake) => carMake.id === carMakeId);
        if (carMakeIndexAtId > -1 && update) {
            this.carsMake[carMakeIndexAtId] = update;
            return this.carsMake[carMakeIndexAtId];
        }
    }

    updateCarModel(carModelId, update) {
        const carModelIndexAtId = this.carsModel.findIndex((carModel) => carModel.id === carModelId);
        if (carModelIndexAtId > -1 && update) {
            this.carsModel[carModelIndexAtId] = update;
            return this.carsModel[carModelIndexAtId]
        }
    }

    deleteCarMake(carMakeId) {
        const carMakeIndexAtId = this.carsMake.findIndex((carMake) => carMake.id === carMakeId);
        if (carMakeIndexAtId > -1) {
            this.carsMake.splice(carMakeIndexAtId, 1);
            this.carsModel = this.carsModel.map((carModel) => {
                if (carModel.carsMake && carModel.carsMake.id === carMakeId) {
                    carModel.carMake = null;
                }
                return carModel;
            })
        }
    }

    deleteCarModel(carModelId) {
        const carModelIndexAtId = this.carsModel.findIndex((carModel) => carModel.id === carModelId);
        if (carModelIndexAtId > -1) {
            this.carsModel.splice(carModelIndexAtId, 1)
        }
    }
    
    // Assign car models to car makes
    assignCarMakeToCarModel(carMakeId, carModelId) {
        const carModelAtIndex = this.carsModel.find(
            (carModel) => parseInt(carModel.it) === parseInt(carModelId));
        const carMakeAtIndex = this.carsMake.find(
            (carMake) => parseInt(carMake.id) === parseInt(carMakeId));
        if (carModelAtIndex && carMakeAtIndex) {
            carModelAtIndex.carMake = carMakeAtIndex;
        }
    }
        

    get storeDetails() {
        return `We have ${this.totalCarsMake} car makes and ${this.totalCarsModel} car models`
    }

    logStoreDetails = () => {
        console.log(this.storeDetails);
    }

    sortDirection = 1

    sortedModelNames() {
        return this.carsModel.sort((a, b) => ((b.carModelName.toLowerCase() < a.carModelName.toLowerCase()) ? 1  : -1 ) * this.sortDirection)
    };

    sortFuelDirection = 1

    sortedModelFuel() {
        return this.carsModel.sort((a, b) => ((b.carModelFuel.toLowerCase() < a.carModelFuel.toLowerCase()) ? 1 : -1) * this.sortFuelDirection)
    };

};

export default carStore;



