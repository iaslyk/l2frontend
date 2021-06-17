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
        this.getCarsModelAsync()
        this.carsModelData = {
            carsModel: []
        }
        this.status = "Loading..."
        makeObservable(this, {
            carsModelData: observable,
            status: observable,
            newCarModelName: observable,
            newCarModelFuel: observable,
            newCarModelInfo: observable,
            editCarModelName: observable,
            editCarModelFuel: observable,
            editCarModelInfo: observable,
            carMakeModel: observable,
            editCarMakeModel: observable,
            createCarModel: action,
            deleteCarModel: action,
            sortedModelNames: action,
            sortedModelFuel: action,
            reverseSortedModelNames: action,
            reverseSortedModelFuel: action,
            currentPage: observable,
            modelsPerPage: observable,
            indexOfFirstModel: observable,
            indexOfLastModel: observable,
            setPage: action,
            filteredModelsValue: observable,
            filteredModels: computed,
            onChangeFilterModels: action,
            editCarModel: action,
            totalCarsModel: computed,
            Id: computed,
        });
    }

    
    getCarsModelAsync = async() => {
        try {
            const data = await this.carsModelService.get();
            runInAction(() => {
                this.carsModelData.carsModel = data;
            })
        } catch(error) {
            runInAction(() => {
                this.status = "error";
            })
        }
    }
    
    createCarModelAsync = async (model) => {
        try {
            const response = await this.carsModelService.post(model);
            if (response.status === 201) {
                runInAction(() => {
                    this.status = "Success";
                })
            }
        } catch (error) {
            runInAction(() => {
                this.status = "error";
            })
        }
    }

    updateCarsModelAsync = async(model) => {
        try {
            const response = await this.carsModelService.put(model);
            if (response.status === 200) {
                runInAction(() => {
                    this.status = "Success";
                })
            }
        } catch (error) {
            runInAction(() => {
                this.status = "error";
            })
        }
    }

    deleteCarModelAsync = async(id) => {
        try {
            const response = await this.carsModelService.delete(id);
            const data = await this.carsModelService.get();
            if (response.status === 200) {
                runInAction(() => {
                    this.status = "Success";
                    this.carsModelData.carsModel = data;
                })
            }
        } catch (error) {
            runInAction(() => {
                this.status = "error"
            })
        }
    }

    get Id(){
        const make_length = this.carsModelData.carsModel.length
        if (make_length === 0) {
            const currentId = 0;
            return currentId
          } else {
            const currentId = ++this.carsModelData.carsModel.slice(-1)[0].id;
            return currentId
          }
        }

    newCarModelName = React.createRef();
    newCarModelFuel = React.createRef();
    newCarModelInfo = React.createRef();
    carMakeModel = React.createRef();
    editCarModelName = React.createRef();
    editCarModelFuel = React.createRef();
    editCarModelInfo = React.createRef();
    editCarMakeModel = React.createRef();
    
    // Create car model
    createCarModel = () => {
        this.createCarModelAsync({
            id: this.Id,
            carModelName: this.newCarModelName.current.value,
            carModelFuel: this.newCarModelFuel.current.value,
            carModelInfo: this.newCarModelInfo.current.value,
            carMake: this.carMakeModel.current.value
        });
    }
    
    editCarModel = (id) => {
        this.updateCarsModelAsync(id,{
            carModelName: this.editCarModelName.current.value,
            carModelFuel: this.editCarModelFuel.current.value,
            carModelInfo: this.editCarModelInfo.current.value,
            carMake: this.editCarMakeModel.current.value
        })
    };

    // Delete car model
    deleteCarModel = async(carModelId) => {
        this.deleteCarModelAsync(carModelId);
    }

    sortedModelNames(){
        return this.carsModelData.carsModel.sort((a, b) => (b.carModelName.toLowerCase().localeCompare(a.carModelName.toLowerCase())))
    };

    sortedModelFuel(){
        return this.carsModelData.carsModel.sort((a, b) => (b.carModelFuel.toLowerCase().localeCompare(a.carModelFuel.toLowerCase())))
    };

    reverseSortedModelNames(){
        return this.carsModelData.carsModel.sort((a, b) => (a.carModelName.toLowerCase().localeCompare(b.carModelName.toLowerCase())))
    };

    reverseSortedModelFuel(){
        return this.carsModelData.carsModel.sort((a, b) => (a.carModelFuel.toLowerCase().localeCompare(b.carModelFuel.toLowerCase())))
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

    get totalCarsModel() {
        return this.carsModelData.carsModel.length;
    }

        get storeDetails() {
        return `We have ${this.totalCarsModel} car models`
    }
};


export default new CarModelsStore();
