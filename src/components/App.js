import React from 'react';
import { BrowserRouter } from "react-router-dom";
import {StoreProvider} from './store/carStores.js';
import './App.css';

function App() {
  return (
    <StoreProvider>
      <BrowserRouter>
        <div className="carStores">
          
        </div>
      </BrowserRouter>
    </StoreProvider>
  );
}

export default App;
