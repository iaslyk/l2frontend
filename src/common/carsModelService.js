// services for carsModel
const urlCarsModel = "http://localhost:3001/carsModel/"


class CarsModelService {
    
    get = async () => {
        const options = {
            method: "GET",
        }
        const request = new Request(urlCarsModel, options);
        const response = await fetch(request);
        const data = response.json();
        return data;
    }

    post = async (model) => {
        const headers = new Headers();
        headers.append("Content-Type", "application/json");
        var options = {
            method: "POST",
            headers,
            body: JSON.stringify(model)
        }
        const request = new Request(urlCarsModel, options);
        const response = await fetch(request);
        return response;
    }

    put = async (id, data) => {
        const headers = new Headers()
        headers.append("Content-Type", "application/json");
        var options = {
            method: "PUT",
            headers,
            body: JSON.stringify(data)
        }
        const request = new Request(urlCarsModel + id, options);
        const response = await fetch(request);
        return response;
    }
    
    delete = async (id) => {
        const headers = new Headers();
        headers.append("Content-Type", "application/json");
        const options = {
            method: "DELETE",
            headers
        }
        const request = new Request(urlCarsModel + id, options);
        const response = await fetch(request);
        return response;
    }  
}


export default CarsModelService;
