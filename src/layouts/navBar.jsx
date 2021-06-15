import React from 'react';
import {Link} from 'react-router-dom';


const NavigationBar = () => {

   return (
   <div className="NavigationBar">
       <nav>
           <ul className="NavBarLinks">
               <Link className="Links" to="/">
                    <li>Car Makes</li>
               </Link>
               <Link className="Links" to="/carsModel">
                    <li>Car Models</li>
               </Link>
           </ul>
       </nav>
    </div>)
};


export default NavigationBar;
