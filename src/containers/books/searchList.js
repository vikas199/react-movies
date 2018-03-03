import React, { Component } from 'react'
import './search.css'




class SearchList extends Component {
    render() {
        const bookInfo = this.props.book.volumeInfo
        return (

            <div className="container">
                <div className="card">
                    <div className="card-body">
                        <img src={bookInfo.imageLinks ? bookInfo.imageLinks.smallThumbnail : null} alt='Book Preview' />
                        <div className='details'>
                            <p><strong>Title:</strong>{bookInfo.title}</p>
                            <p><strong>Authors:</strong>{bookInfo.authors}</p>
                            <p><strong>Published Date:</strong>{new Date(bookInfo.publishedDate).getFullYear()}</p>
                        </div>
                        <div className='description'>
                            <p><strong>Description:</strong><span>{bookInfo.description ? bookInfo.description : 'No Description Available'}</span></p>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}



export default SearchList;