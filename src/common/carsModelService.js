// services for carsModel
const url = "http://localhost:3001/carsModel"


class CarsModelService {
    
    get = async (urlParams) => {
        const options = {
            method: "GET",
        }
     const request = new Request(url + "?" + urlParams, options);
     const response = await fetch(request);
     return response.json();
    }
    post = async (model) => {
        const headers = new Headers();
        headers.append("Content-Type", "application/json");
        var options = {
            method: "POST",
            headers,
            body: JSON.stringify(model)
        }
        const request = new Request(url, options);
        const response = await fetch(request);
        return response;
    }
    put = async (model) => {
        const headers = new Headers()
        headers.append("Content-Type", "application/json");
        var options = {
            method: "PUT",
            headers,
            body: JSON.stringify(model)
        }
        const request = new Request(url, options);
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
        const request = new Request(url + "/" + id, options);
        const response = await fetch(request);
        return response;
    }
    
}

export default CarsModelService;