import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import axios from 'axios';

//axios.defaults.baseURL = "";
//common place
// axios.defaults.headers.common['Authorization'] ='token';
// axios.defaults.headers.post['content-type' ='application/json'];
axios.interceptors.request.use(request =>{
     
    return request;
},error=>{
    return Promise.reject(error);
});

axios.interceptors.response.use(response =>{

    return response;
},error=>{
    return Promise.reject(error);
});

ReactDOM.render( <App />, document.getElementById( 'root' ) );
registerServiceWorker();
