import {
    action,
    makeObservable,
    observable,
    runInAction
} from 'mobx';
import React from 'react';
import CarsMakeService from '../../common/carsMakeService'



class EditCarMakesStore{
    
    constructor(){
        this.carsMakeService = new CarsMakeService();
        this.getCarsMakeAsync()
        this.carsMakeData = {    
            carsMake: []
        };
        this.status = "Loading...";
        makeObservable(this, {
            carsMakeData: observable,
            status: observable,
            editCarMakeName: observable,
            editCarMakeAbrv: observable,
            editCarMake: action,
                })
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
 
    updateCarsMakeAsync = async(make) => {
        try {
            const response = await this.carsMakeService.put(make);
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

    editCarMakeName = React.createRef();
    editCarMakeAbrv = React.createRef();

    editCarMake(id){
        this.updateCarsMakeAsync(id, {
            carMakeName: this.editCarMakeName.current.value, 
            carMakeAbrv: this.editCarMakeAbrv.current.value,}
        );
    }

};


export default new EditCarMakesStore();
