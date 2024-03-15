import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import 'bootstrap/dist/css/bootstrap.css';
import reportWebVitals from './reportWebVitals';
 import MainDash from './components/mainDash';
 import { BrowserRouter } from 'react-router-dom';
 import { createStore } from "redux";
import { Provider } from "react-redux";
import erpReducer from './components/erpReducer';
 const store=createStore(erpReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <React.StrictMode>
      < MainDash />
      </React.StrictMode>
    </BrowserRouter>
    </Provider>  
      
    
    
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
