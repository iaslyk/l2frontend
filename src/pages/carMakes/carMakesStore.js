import {
    action,
    computed,
    makeObservable,
    observable,
    runInAction
} from 'mobx';
import React from 'react';
import CarsMakeService from '../../common/carsMakeService'

class CarMakesStore extends React.Component{
    constructor(props){
        super(props);
        this.carsMakeService = new CarsMakeService();
        this.carsMakeData = {    
            carsMake: []
        };
        this.status = "Loading...";
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
            storeDetails: computed,
            totalCarsMake: computed,
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

    deleteCarMakeAsync = (id) => {
        try {
            const response = this.carsMakeService.delete(id);
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

    newCarMakeName = React.createRef();
    newCarMakeAbrv = React.createRef();
    editCarMakeName = React.createRef();
    editCarMakeAbrv = React.createRef();

    // Get total number of car makes
    get totalCarsMake() {
        return this.carsMakeData.carsMake.length;
    }

    get Id(){
        const currentId = ++this.carsMakeData.carsMake.slice(-1)[0].id;
        return currentId
    }
    // Create car make
    createCarMake = () => {
        this.createCarMakeAsync({
            id: this.Id,
            carMakeName: this.newCarMakeName.current.value, 
            carMakeAbrv: this.newCarMakeAbrv.current.value,}
        );
    }
    
    // Delete car make
    deleteCarMake = async(carMakeId) => {
        this.deleteCarMakeAsync(carMakeId);
        this.getCarsMakeAsync()
    }

    editCarMake(){
        this.updateCarsMakeAsync({
        carMakeName: this.editCarMakeName.current.value, 
        carMakeAbrv: this.editCarMakeAbrv.current.value,})
    }

    get storeDetails() {
        return `We have ${this.totalCarsMake} car makes.`
    }

};

export default new CarMakesStore();
