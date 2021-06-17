import {
    action,
    computed,
    makeObservable,
    observable,
    runInAction
} from 'mobx';
import React from 'react';
import CarsModelService from '../../common/carsModelService'


class AddCarModelStore {
    
    constructor(){
        this.carsModelService = new CarsModelService();
        this.getCarsModelAsync()
        this.carsModelData = {
            carsModel: []
        }
        this.status = "Loading..."
        makeObservable(this, {
            carsModelData: observable,
            newCarModelName: observable,
            newCarModelFuel: observable,
            newCarModelInfo: observable,
            carMakeModel: observable,
            createCarModel: action,
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

};


export default new AddCarModelStore();
