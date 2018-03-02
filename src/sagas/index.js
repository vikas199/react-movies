import {takeEvery} from 'redux-saga/effects'
import {moviesSaga} from './moviesSaga'
import {booksSaga} from './booksSaga'
import * as Constants from '../Constants'

export function* watchMoviesSaga() {
    yield takeEvery(Constants.FETCH_MOVIES_INIT, moviesSaga)
}

export function* watchBooksSaga(){
    yield takeEvery(Constants.FETCH_BOOKS_INIT, booksSaga)
}