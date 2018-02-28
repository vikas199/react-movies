import * as Constants from '../Constants'


export const mdetailLoading = () => {
    return {
        type:Constants.MDETAIL_LOADING
    }
}

export const mdetailSuccess = (results) => {
    return{
        type: Constants.MDETAIL_LOADING_SUCCESS,
        results:results
    }
}

export const mdetailFail = () => {
    return{
        type: Constants.MDETAIL_ERROR
    }
}

export const moviesDetailFecth = () => {
    return dispatch => {
        dispatch(mdetailLoading())
        const id = window.location.pathname.substring(7);
        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=f3e9f7d1677c7aa63c9ab526381eeceb&language=en-US&append_to_response=credits`)
        .then(response => response.json())
        .then(data => {dispatch(mdetailSuccess(data))})
        .catch(error => dispatch(mdetailFail(error)))
    }
}