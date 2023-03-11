import React from 'react';
import ReactDom from 'react-dom/client';
import App from "./App";
import "./index.css";
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";
import {store} from "./redux/store";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";


const root = ReactDom.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
    <BrowserRouter>
        <App/>
    </BrowserRouter>
    </Provider>
);