import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './layouts/App';
import {Provider} from 'mobx-react';
import carMakesStore from './pages/carMakes/carMakesStore';
import carModelsStore from './pages/carModels/carModelsStore';



const Root = (
    <Provider carMakesStore={carMakesStore} carModelsStore={carModelsStore}>
      <App />
      </Provider>
  )

ReactDOM.render(Root , document.getElementById('root'));

