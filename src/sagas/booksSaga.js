import { put } from 'redux-saga/effects'
import * as actions from '../actions/booksActions'
import axios from 'axios'

export function* booksSaga(action) {
    try {
        let val = action.lastSearchQuery;
        let startIndex = action.startIndex;
        let maxResults = action.maxResults;
        yield put(actions.fetchBooksStart())
        let response = yield axios.get(`https://www.googleapis.com/books/v1/volumes?q=${val}&startIndex=${startIndex}&maxResults=${maxResults}`, {

        })
            .then(response => response)
        yield put(actions.fetchBooksSuccess(response.data.items))
    }
    catch (error) {
        yield put(actions.fetchBooksFail(error))
    }
}
