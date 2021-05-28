// services for carsMake
const url = "http://localhost:3001/carsMake"

class CarsMakeService {
    
     async (urlParams) {
        const options = {
            method: "GET",
        }
     const request = new Request(url + "?" + urlParams, options);
     const response = fetch(request);
     console.log(response)
     return response.json();
    }

    post = async (make) => {
        const headers = new Headers();
        headers.append("Content-Type", "application/json");
        var options = {
            method: "POST",
            headers,
            body: JSON.stringify(make)
        }
        const request = new Request(url, options);
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
    


export default CarsMakeService;
