import moviesReducer from './moviesReducer'
import movieDetailReducer from './movieDetailReducer'
import {combineReducers} from 'redux';

const rootReducer = combineReducers({
    moviesReducer: moviesReducer,
    movieDetailReducer: movieDetailReducer
})

export default rootReducer;



