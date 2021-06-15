import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './layouts/App';
import {Provider} from 'mobx-react';
import RootStore from './stores/RootStore'


const Root = (
    <Provider stores={RootStore}>
      <App />
      </Provider>
  )

ReactDOM.render(Root , document.getElementById('root'));

