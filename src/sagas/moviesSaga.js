import {put} from 'redux-saga/effects'
import * as actions from '../actions/movieActions'



export function* moviesSaga(action){
try{
    let val=action.value;
  yield put(actions.movieLoading())

  let res = yield fetch(`https://api.themoviedb.org/3/search/movie?api_key=f3e9f7d1677c7aa63c9ab526381eeceb&language=en-US&query=${val}&page=1&include_adult=false`,{

  })
  .then(response => response.json())
  .then(data => data)
   yield put(actions.movieLoadingSuccess(res))
   

}
catch(error){
   yield put(actions.movieLoadingError(error))
}
}

