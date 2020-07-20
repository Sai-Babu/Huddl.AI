import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';
import Routes from "./routes";

import axios from "axios";
import reducers from "./reducers";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./sagas";
import 'bootstrap/dist/css/bootstrap.min.css';

// Default URL for Public API
axios.defaults.baseURL = "http://jsonplaceholder.typicode.com/";

const sagaMiddleware = createSagaMiddleware();
const store = createStore(reducers, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootSaga);

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <Routes/>
        </Router>
    </Provider>
    , document.getElementById('root')
);

serviceWorker.unregister();
