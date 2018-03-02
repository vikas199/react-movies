import * as Constants from '../Constants'

const initialState={
    loading:false,
    error:null,
    booksResults:[]
}

const reducer = (state=initialState, action) => {
    switch(action.type){
        case Constants.FETCH_BOOKS_INIT:
        return{
            ...state,
            loading: true
        }
        case Constants.FETCH_BOOKS_SUCCESS:
        return{
            ...state,
            loading:false,
            booksResults:action.results
        }
        case Constants.FETCH_BOOKS_ERROR:
        return{
            ...state,
            error: action.error
        }
        default: return state;
    }
}

export default reducer;