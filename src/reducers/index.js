import moviesReducer from './moviesReducer'
import movieDetailReducer from './movieDetailReducer'
import booksReducer from './booksReducer'
import {combineReducers} from 'redux';

const rootReducer = combineReducers({
    moviesReducer: moviesReducer,
    movieDetailReducer: movieDetailReducer,
    booksReducer: booksReducer
})

export default rootReducer;



