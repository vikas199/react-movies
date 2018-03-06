import React, { Component } from 'react'
import SearchList from './searchList'
import * as actions from '../../actions/booksActions'
import Paginations from './Pagination'
import {Pagination, PaginationItem, PaginationLink} from 'reactstrap'
import { connect } from 'react-redux';
import './search.css'



let prev=0;
let next=0;
let last=0;
let first=0;

class Search extends Component {
    state = {
        startIndex: 0,
        maxResults: 5,
        currentPage: 1,
        booksPerPage: 5
    }
    handleChange = (event) => {
       this.props.onInputChange(event.target.value)
    }

    handlePageChange = (event) => {
        this.setState({ currentPage: Number(event.target.id)})
    }
    handleLastClick(event){
        event.preventDefault();
        this.setState({currentPage: last})
    }
    handleFirstClick = (event) => {
        event.preventDefault();
        this.setState({currentPage: 1})
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
        const { currentPage, booksPerPage } = this.state;
        const indexOfLastBook = currentPage *  booksPerPage;
        const indexOfFirstBook = indexOfLastBook - booksPerPage;
        const currentBooks = this.props.books.slice(indexOfFirstBook, indexOfLastBook)
        prev = currentPage > 0 ? (currentPage -1) : 0;
        last = Math.ceil(this.props.books.length / booksPerPage)
        next = (last === currentPage) ? currentPage: currentPage+1
        console.log(this.props.books)
        let bookDetails = null;
        if (this.props.books) {
            bookDetails = currentBooks.map((book, index) => {
                return <SearchList book={book} key={book.id} />
            })
        }
        const pageNumbers = [];
        for(let i = 1; i<= Math.ceil(this.props.books.length / booksPerPage); i++){
            pageNumbers.push(i)
        }

        const renderPageNumbers = pageNumbers.map(number => {
            return(
               <li>{number}</li>
            )
        })
        return (
            <div>
                <div className="searchList">
                    <input onChange={this.handleChange} />
                    <Paginations onChange={this.handleResults}/>
                    <button type="button" className="btn btn-primary" onClick={this.handleSubmit}>Submit</button>
                </div>
                {bookDetails}
                <div>
                <ul className="pagination">
                {renderPageNumbers}
                </ul>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        searchTerm: state.booksReducer.searchTerm,
        loading: state.booksReducer.loading,
        books: state.booksReducer.booksResults
    }
}

const mapDispatchToProps = dispatch => {
    return {
        books_fetch: (lastSearchQuery, startIndex, maxResults) => dispatch(actions.fetchBooksInit(lastSearchQuery, startIndex, maxResults)),
        onInputChange: (searchTerm) => dispatch(actions.onInputChange(searchTerm)),
       
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Search)