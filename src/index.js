import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './layouts/App';
import {Provider} from 'mobx-react';
import stores from './stores/store'


const Root = (
    <Provider stores={stores} carMakesStore={stores.carMakesStore} carModelsStore={stores.carModelsStore}>
      <App />
      </Provider>
  )

ReactDOM.render(Root , document.getElementById('root'));

