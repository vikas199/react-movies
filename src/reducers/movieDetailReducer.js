import * as Constants from '../Constants'


const initialState = {
    movieDetail: {
        genres: [],
        credits: {
            cast: [],
            crew: []
        }

    },
    loading: false,
    error: null
}

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case Constants.MDETAIL_LOADING:
            return {
                ...state,
                loading: true
            }

        case Constants.MDETAIL_LOADING_SUCCESS:
            return {
                ...state,
                movieDetail: action.results,
                loading: false
            }
        case Constants.MDETAIL_ERROR:
            return {
                ...state,
                error: action.error
            }
        default: return state;
    }

}

export default reducer;