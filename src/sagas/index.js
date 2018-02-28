import {takeEvery} from 'redux-saga/effects'
import {moviesSaga} from './moviesSaga'
import * as Constants from '../Constants'

export function* watchMoviesSaga() {
    yield takeEvery(Constants.FETCH_MOVIES_INIT, moviesSaga)
}