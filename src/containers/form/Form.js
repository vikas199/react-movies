import React, {Component} from 'react'
import {connect} from 'react-redux';
import * as actions from '../../actions/movieActions'
import MovieList from '../MovieList/MovieList'
import './Form.css'

class Form extends Component {
    state={
        value:''
       
    }
    
     onInputChange = (event) => {
      this.setState({ value: event.target.value})
      this.props.movies_fetch(event.target.value)
    }
    render(){
        
        let res=null;
        if(this.props.movieResults.results){
            res=(
                <MovieList results={this.props.movieResults.results} />
            )
        }
        return(
            <div>
                  <input  
                  onChange={this.onInputChange} 
                  className="searchBar" 
                  type="text" 
                  placeholder="Search a movie" required 
                  value={this.state.value}/>
                  {res}

            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
    movieResults: state.moviesReducer.movieResults
    }
}

const mapDispatchToProps = dispatch => {
    return {
        movies_fetch: (value) => dispatch(actions.moviesFetch(value))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Form);