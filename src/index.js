import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import axios from 'axios';

axios.defaults.baseURL = 'https://jsonplaceholder.typicode.com';
axios.defaults.headers.common['Authorization'] = 'AUTH TOKEN';
axios.defaults.headers.post['Content-Typr'] = 'application/json';

axios.interceptors.request.use(request => {
    console.log(request);
    //edit the request
    return request;
}, error => {
    console.log(error);
    //return the error to handle it by catch method
    return Promise.reject(error);
});

axios.interceptors.response.use(response => {
    console.log(response);
    //edit the request
    return response;
}, error => {
    console.log(error);
    //return the error to handle it by catch method
    return Promise.reject(error);
});


ReactDOM.render( <App />, document.getElementById( 'root' ) );
registerServiceWorker();
