import {
    action,
    computed,
    makeObservable,
    observable,
    runInAction
} from 'mobx';
import CarsMakeService from '../../common/carsMakeService'


class CarMakesStore{
    
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
            deleteCarMake: action,
            storeDetails: computed,
            totalCarsMake: computed,
                })
        }
 
        
    async getCarsMakeAsync(){
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

    async deleteCarMakeAsync(id){
        try {
            const response = await this.carsMakeService.delete(id);
            const data = await this.carsMakeService.get();
            if (response.status === 200) {
                runInAction(() => {
                    this.status = "Success";
                    this.carsMakeData.carsMake = data;
                })
            }
        } catch (error) {
            runInAction(() => {
                this.status = "error"
            })
        }
    }

    // Get total number of car makes
    get totalCarsMake() {
        return this.carsMakeData.carsMake.length;
    }

    // Delete car make
    deleteCarMake(carMakeId){
        this.deleteCarMakeAsync(carMakeId)
    }

    get storeDetails() {
        return `We have ${this.totalCarsMake} car makes.`
    }

};


export default new CarMakesStore();
