import * as Constants from '../Constants'

const initialState = {
    searchTerm:'',
    maxResults:5,
    loading: false,
    error: null,
    booksResults: []
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case Constants.MAX_RESULTS:
        return{
            ...state,
            maxResults: action.payload
        }
        case Constants.INPUT_VLAUE_CHANGE:
        return{
            ...state,
            searchTerm: action.payload
        }
        case Constants.FETCH_BOOKS_INIT:
            return {
                ...state,
                loading: true
            }
        case Constants.FETCH_BOOKS_SUCCESS:
            return {
                ...state,
                loading: false,
                booksResults: action.results
            }
        case Constants.FETCH_BOOKS_ERROR:
            return {
                ...state,
                error: action.error
            }
        default: return state;
    }
}

export default reducer;