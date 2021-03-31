import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import { StoreProvider } from './stores/carStores';

ReactDOM.render(
  <React.StrictMode>
    <StoreProvider>
      <App />
    </StoreProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
