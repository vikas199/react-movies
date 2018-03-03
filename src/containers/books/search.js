import React, { Component } from 'react'
import SearchList from './searchList'
import * as actions from '../../actions/booksActions'
import Pagination from './Pagination'
import { connect } from 'react-redux';
import './search.css'

class Search extends Component {
    state = {
        startIndex: 0,
        maxResults: 5
    }
    handleChange = (event) => {
       this.props.onInputChange()
    }

    handleResults = (event) => {
        this.setState({ maxResults: event.target.value })

    }

    handleSubmit = (event) => {
        event.preventDefault()
        this.props.books_fetch(this.props.searchTerm, this.state.startIndex, this.state.maxResults);
    }

    componentDidUpdate(prevProps, prevState){
           if(this.state.maxResults !== prevState.maxResults){
              this.props.books_fetch(this.props.searchTerm, this.state.startIndex, this.state.maxResults)
           }
    }
    render() {
        console.log(this.props.books)
        let bookDetails = null;
        if (this.props.books) {
            bookDetails = this.props.books.map(book => {
                return <SearchList book={book} key={book.id} />
            })
        }
        return (
            <div>
                <div className="searchList">
                    <input onChange={this.handleChange} />
                    <Pagination value={this.state.maxResults} onChange={this.handleResults} />
                    <button type="button" className="btn btn-primary" onClick={this.handleSubmit}>Submit</button>
                </div>
                {bookDetails}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        maxResults: state.booksReducer.maxResults,
        searchTerm: state.booksReducer.searchTerm,
        loading: state.booksReducer.loading,
        books: state.booksReducer.booksResults
    }
}

const mapDispatchToProps = dispatch => {
    return {
        books_fetch: (lastSearchQuery, startIndex, maxResults) => dispatch(actions.fetchBooksInit(lastSearchQuery, startIndex, maxResults)),
        onInputChange: (searchTerm) => dispatch(actions.onInputChange(searchTerm)),
        onMaxResults: (maxResults) => dispatch(actions.onMaxResults(maxResults))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Search)