// services for carsMake
const url = "http://localhost:3001"

class CarsMakeService {
    
    // GET method
    get = async (urlParams) => {
        const options = {
            method: "GET",
        }
        const request = new Request(url + "?" + urlParams, options);
        const response = await fetch(request);
        return response.json();
    }

    // POST method
    post = async (model) => {
        const headers = new Headers();
        headers.append()
    }
    
}
    


export default CarsMakeService;
