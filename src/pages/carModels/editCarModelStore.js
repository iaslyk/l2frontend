import {
    makeObservable,
    observable,
    runInAction
} from 'mobx';
import React from 'react';
import CarsModelService from '../../common/carsModelService'
import CarsMakeService from '../../common/carsMakeService'



class EditCarModelsStore {
    
    constructor(){
        this.carsModelService = new CarsModelService();
        this.getCarsModelAsync()
        this.carsModelData = {
            carsModel: []
        }
        this.carsMakeService = new CarsMakeService();
        this.getCarsMakeAsync()
        this.carsMakeData = {    
            carsMake: []
        };
        this.status = "Loading..."
        makeObservable(this, {
            carsModelData: observable,
            status: observable,
            editCarModelName: observable,
            editCarModelFuel: observable,
            editCarModelInfo: observable,
            editCarMakeModel: observable,
        });
    }

    getCarsMakeAsync = async() => {
        try {
            const data = await this.carsMakeService.get();
            runInAction(() => {
                this.carsMakeData.carsMake = data;
            })
        } catch(error) {
            runInAction(() => {
                this.status = "error";
            })
        }
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
 
    editCarModelName = React.createRef();
    editCarModelFuel = React.createRef();
    editCarModelInfo = React.createRef();
    editCarMakeModel = React.createRef();
    

    editCarModel = (id) => {
        this.updateCarsModelAsync(id,{
            carModelName: this.editCarModelName.current.value,
            carModelFuel: this.editCarModelFuel.current.value,
            carModelInfo: this.editCarModelInfo.current.value,
            carMake: this.editCarMakeModel.current.value
        })
    };


};


export default new EditCarModelsStore();
