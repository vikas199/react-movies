import * as Constants from '../Constants'


const initialState = {
    loading: false,
    error:null,
    movieResults:[]
}

export const reducer = (state= initialState, action) => {
    switch(action.type){
      case Constants.MOVIES_LOADING:
      return{
          ...state,
          loading: true
      }
      case Constants.MOVIES_LOADING_SUCCESS:
      return{
          ...state,
          movieResults: action.results

      }
      case Constants.MOVIES_LOADING_ERROR:
      return{
          ...state,
          loading:false,
          error: action.error
      }
      default:
      return state;
    }
}

export default reducer;