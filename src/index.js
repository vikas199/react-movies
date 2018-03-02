import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga'
import {watchMoviesSaga} from './sagas/index'
import {watchBooksSaga} from './sagas/index'
import thunk from 'redux-thunk'
import reducers from './reducers/index'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './containers/App';
import registerServiceWorker from './registerServiceWorker';


const saga = createSagaMiddleware()

const store = createStore(reducers, applyMiddleware(thunk, saga))

saga.run(watchMoviesSaga)
saga.run(watchBooksSaga)


ReactDOM.render(
<BrowserRouter>
<Provider store = {store}>
<App />
</Provider>
</BrowserRouter>, document.getElementById('root'));
registerServiceWorker();
