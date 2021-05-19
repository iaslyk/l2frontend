// services for carsMake
import { useState } from 'react';

function CarsMakeService () {
    /*
    carsMakeHead = ["Car Make Name", "Car Make Abbreviation"];
    carsMake = [            
        { id: 0, carMakeName: "Bayerische Motoren Werke AG", carMakeAbrv: "BMW"},
        { id: 1, carMakeName: "Volkswagen", carMakeAbrv: "VW"},
        { id: 2, carMakeName: "Toyota Motor Corporation", carMakeAbrv: "Toyota"},
        { id: 3, carMakeName: "Rimac Automobili", carMakeAbrv: "Rimac"},
        { id: 4, carMakeName: "General Motors Company", carMakeAbrv: "GM"},
        { id: 5, carMakeName: "Fiat Chrysler Automobiles N.V.", carMakeAbrv: "FCA"},
    ];
    */

    const [ carsMake, setCarsMake ] = useState(null)
    
    // Fetch Function   
    fetch("./carsMake.json").then(
        function(res){
        return res.json()
      }).then(function(carsMake){
      // store Data in State Data Variable
        setCarsMake(carsMake)
      }).catch(
        function(err){
          console.log(err, ' error')
        }
      )

      
}
    


export default CarsMakeService;