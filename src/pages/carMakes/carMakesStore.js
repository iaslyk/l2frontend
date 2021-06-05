import {
    action,
    makeObservable,
    observable,
    runInAction
} from 'mobx';
import React from 'react';
import CarsMakeService from '../../common/carsMakeService'

class CarMakesStore{
    constructor(){
        this.carsMakeService = new CarsMakeService();
        makeObservable(this, {
            carsMakeData: observable,
            status: observable,
            newCarMakeName: observable,
            newCarMakeAbrv: observable,
            editCarMakeName: observable,
            editCarMakeAbrv: observable,
            createCarMake: action,
            deleteCarMake: action,
            editCarMake: action,
                })
        }

    carsMakeData = {    
        carsMake: []
    }
    status = "Loading..."


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
    
    createCarMakeAsync = async (make) => {
        try {
            const response = await this.carsMakeService.post(make);
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

    updateCarsMakeAsync = async(make) => {
        try {
            const response = await this.carsMakeService.patch(make);
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

    deleteCarMakeAsync = async(id) => {
        try {
            const response = await this.carsMakeService.delete(id);
            if (response.status === 204) {
                runInAction(() => {
                    this.status = "Success";
                })
            }
        } catch (error) {
            runInAction(() => {
                this.status = "error"
            })
        }
    }


    // lastId = this.carsMakeData.carsMake.slice(-1)[0].id;
    newCarMakeName = React.createRef();
    newCarMakeAbrv = React.createRef();
    editCarMakeName = React.createRef();
    editCarMakeAbrv = React.createRef();

    // Get total number of car makes
//    get totalCarsMake() {
//        return this.carsMakeData.carsMake.length;
//    }

    // Create car make
    createCarMake = () => {
        this.createCarMakeAsync({
            id: Math.random(),
            carMakeName: this.newCarMakeName.current.value, 
            carMakeAbrv: this.newCarMakeAbrv.current.value,}
        );
    }
    
    // Delete car make
    deleteCarMake = async(carMakeId) => {
        this.deleteCarMakeAsync(carMakeId);
        const data = await this.carsMakeService.get();
        runInAction(() => {
            this.carsMakeData.carsMake = data;
        })
    }

    editCarMake = (id) => {
        this.updateCarsMakeAsync({
        carMakeName: this.editCarMakeName.current.value, 
        carMakeAbrv: this.editCarMakeAbrv.current.value,})
    }

};

export default new CarMakesStore();
