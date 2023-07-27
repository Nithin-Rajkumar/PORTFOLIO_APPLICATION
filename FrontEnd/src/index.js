import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
 import Homepage from './components/HomePage';
 import { Provider } from 'react-redux';
 import PortfolioForm from './components/select';
import { configureStore } from '@reduxjs/toolkit';
import user from './components/Features/user';
const root = ReactDOM.createRoot(document.getElementById('root'));

const store = configureStore({
  reducer:{
    user:user 
  }
})
root.render(
  <React.StrictMode>
    {/* <PortfolioForm/> */}
    <Provider store={store}>
     <App/>
     </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();