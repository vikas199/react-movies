import {put} from 'redux-saga/effects'
import * as actions from '../actions/booksActions'
import axios from 'axios'

export function* booksSaga(action){
    try{
        let val = action.lastSearchQuery
     yield put(actions.fetchBooksStart())
     let response = yield axios.get(`https://www.googleapis.com/books/v1/volumes?q=${val}&startIndex=0&maxResults=40`,{

     })
    .then(response=>response)
    yield put(actions.fetchBooksSuccess(response.data.items))
}
    catch(error){
     yield put(actions.fetchBooksFail(error))
    }
}
