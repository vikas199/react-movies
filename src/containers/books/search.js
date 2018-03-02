import React, {Component} from 'react'
import SearchList from './searchList'
import * as actions from '../../actions/booksActions'
import Pagination from './Pagination'
import {connect} from 'react-redux';
import './search.css'

 class Search extends Component {
    state={
        searchTerm: '',
    }

    // componentDidMount(){
    //     this.props.books_fetch();
    //no need to use this as data need to be loaded when user search a term
    // }
    handleChange = (event) => {
        this.setState({searchTerm: event.target.value})
       
       
    }
    handleSubmit = (event) => {
        event.preventDefault()
        this.props.books_fetch(this.state.searchTerm);

        
    }
    render(){
         let bookDetails = null;
         if(this.props.books){
            bookDetails = this.props.books.map(book => {
                 return <SearchList book={book} key={book.id}/>
             })
         }
        return(
            <div>
            <div className="searchList">
              <input onChange={this.handleChange} />
              <Pagination />
              <button type="button" className="btn btn-primary" onClick={this.handleSubmit}>Submit</button>
             </div>
              {bookDetails}
             </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        loading: state.booksReducer.loading,
        books: state.booksReducer.booksResults
    }
}

const mapDispatchToProps = dispatch => {
    return{
        books_fetch: (lastSearchQuery) => dispatch(actions.fetchBooksInit(lastSearchQuery))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Search)