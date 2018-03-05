import * as Constants from '../Constants';

export const fetchBooksStart = () => {
    return {
        type: Constants.FETCH_BOOKS_START
    }
}

export const fetchBooksSuccess = (results) => {
    return {
        type: Constants.FETCH_BOOKS_SUCCESS,
        results: results

    }
}

// export const searchInputChange = () => {
//     return{

//     }
// }

export const fetchBooksFail = (error) => {
    return {
        type: Constants.FETCH_BOOKS_ERROR,
        error: error
    }
}

export const onInputChange = (searchTerm) => {
    return {
           type: Constants.INPUT_VLAUE_CHANGE,
           payload: searchTerm
    }
}

// export const onMaxResults = (maxResults) => {
//     return {
//         type:Constants.MAX_RESULTS,
//         payload: ma
//     }
// }

export const fetchBooksInit = (lastSearchQuery, startIndex, maxResults) => {
    return {
        type: Constants.FETCH_BOOKS_INIT,
        lastSearchQuery,
        startIndex,
        maxResults
    }
}