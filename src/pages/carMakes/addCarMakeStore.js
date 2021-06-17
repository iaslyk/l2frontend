import {
    action,
    computed,
    makeObservable,
    observable,
    runInAction
} from 'mobx';
import React from 'react';
import CarsMakeService from '../../common/carsMakeService'


class AddCarMakeStore{
       
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
            newCarMakeName: observable,
            newCarMakeAbrv: observable,
            createCarMake: action,
            Id: computed
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

    newCarMakeName = React.createRef();
    newCarMakeAbrv = React.createRef();

    get Id(){
        const make_length = this.carsMakeData.carsMake.length
        if (make_length === 0) {
            const currentId = 0;
            return currentId
          } else {
            const currentId = ++this.carsMakeData.carsMake.slice(-1)[0].id;
            return currentId
          }
        }
        
    // Create car make
    createCarMake(){
        this.createCarMakeAsync({
            id: this.Id,
            carMakeName: this.newCarMakeName.current.value, 
            carMakeAbrv: this.newCarMakeAbrv.current.value,}
        );
    }

}

export default new AddCarMakeStore();