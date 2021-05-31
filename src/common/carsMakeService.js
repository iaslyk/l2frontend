// services for carsMake
const urlcarsMake  = "http://localhost:3001/carsMake"

class CarsMakeService {
    
    get = async () => {
        const response = await fetch(urlcarsMake)
        const carsMake = await response.json();
        return carsMake; 
    }

    post = async (make) => {
        const headers = new Headers();
        headers.append("Content-Type", "application/json");
        var options = {
            method: "POST",
            headers,
            body: JSON.stringify(make)
        }
        const request = new Request(urlcarsMake, options);
        const response = await fetch(request);
        return response;
    }

    put = async (make) => {
        const headers = new Headers()
        headers.append("Content-Type", "application/json");
        var options = {
            method: "PUT",
            headers,
            body: JSON.stringify(make)
        }
        const request = new Request(urlcarsMake, options);
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
        const request = new Request(urlcarsMake + "/" + id, options);
        const response = await fetch(request);
        return response;
    }
    
}
    


export default CarsMakeService;
