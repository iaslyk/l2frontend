import {
    action,
    computed,
    makeObservable,
    observable,
    runInAction
} from 'mobx';
import React from 'react';
import CarsModelService from '../../common/carsModelService'

class CarModelsStore {
    constructor(){
        this.carsModelService = new CarsModelService();
        makeObservable(this, {
            carsModelData: observable,
            status: observable,
            lastId: observable,
            newCarModelName: observable,
            newCarModelFuel: observable,
            newCarModelInfo: observable,
            totalCarsModel: computed,
            createCarModel: action,
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
            setPage: action,
            filteredModelsValue: observable,
            filteredModels: computed,
            onChangeFilterModels: action,
            editCarModel: action,
        });
    }

    carsModelData= {
        carsModel: [{}]
    }
    status = "Loading..."

    lastId = this.carsModelData.carsModel.slice(-1)[0].id;
    newCarModelName = React.createRef();
    newCarModelFuel = React.createRef();
    newCarModelInfo = React.createRef();
    carMakeModel = React.createRef();


    // Get total number of car models
    get totalCarsModel() {
        return this.carsModelData.carsModel.length;
    }
    
    // Create car model
    createCarModel = () => {
        this.carsModelData.carsModel.push({
            id: ++this.lastId,
            carModelName: this.newCarModelName.current.value,
            carModelFuel: this.newCarModelFuel.current.value,
            carModelInfo: this.newCarModelInfo.current.value,
            carMake: this.carMakeModel.current.value
        });
    }
    
    editCarModel = (carModelName, carModelFuel, carModelInfo, carMakeModel) => {
        this.carsModelData.carsModel.carModelName = carModelName;
        this.carsModelData.carsModel.carModelFuel = carModelFuel;
        this.carsModelData.carsModel.carModelInfo = carModelInfo;
        this.carsModelData.carsModel.carMake = carMakeModel;
    };

    // Delete car model
    deleteCarModel(carModelId) {
        const carModelIndexAtId = this.carsModelData.carsModel.findIndex((carModel) => carModel.id === carModelId);
        if (carModelIndexAtId > -1) {
            this.carsModelData.carsModel.splice(carModelIndexAtId, 1)
        }
    }
    
        
    // Get numbers of car makes, and car models we have
    get storeDetails() {
        return `We have ${this.totalCarsModel} car models`
    }

    logStoreDetails(){
        console.log(this.storeDetails);
    }

    sortedModelNames(){
        return this.carsModel.sort((a, b) => (b.carModelName.toLowerCase().localeCompare(a.carModelName.toLowerCase())))
    };

    sortedModelFuel(){
        return this.carsModel.sort((a, b) => (b.carModelFuel.toLowerCase().localeCompare(a.carModelFuel.toLowerCase())))
    };

    reverseSortedModelNames(){
        return this.carsModel.sort((a, b) => (a.carModelName.toLowerCase().localeCompare(b.carModelName.toLowerCase())))
    };

    reverseSortedModelFuel(){
        return this.carsModel.sort((a, b) => (a.carModelFuel.toLowerCase().localeCompare(b.carModelFuel.toLowerCase())))
    };

    currentPage = 1;
    modelsPerPage = 5;
    indexOfLastModel = this.currentPage * this.modelsPerPage;
    indexOfFirstModel = this.indexOfLastModel - this.modelsPerPage;
    
    setPage = (pageNumber) => {
        this.currentPage = pageNumber;
        this.indexOfLastModel = this.currentPage * this.modelsPerPage;
        this.indexOfFirstModel = this.indexOfLastModel - this.modelsPerPage;
        
    }

    get filteredModels () {
		this.filteredList = this.carsModelData.carsModel.filter(t=> t.carModelName.toLowerCase().indexOf(this.filteredModelsValue) > -1);
        this.filteredListSliced = this.filteredList.slice(this.indexOfFirstModel, this.indexOfLastModel)
        return this.filteredListSliced
    }

    filteredModelsValue = '';

    onChangeFilterModels = (e) => {
        this.filteredModelsValue = e.target.value.toLowerCase();
    }

};

export default new CarModelsStore();
