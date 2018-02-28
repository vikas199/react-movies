import React, { Component } from 'react'
import Header from '../../components/header/header'
import Cast from '../cast/cast'
import './MovieDetail.css'

class MovieDetail extends Component {

    state = {
        movieDetail: {
            genres: [],
            credits:{
                cast:[],
                crew:[]
            }

        }
    }

    fectMovieDetail = () => {
        const id = window.location.pathname.substring(7);
        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=f3e9f7d1677c7aa63c9ab526381eeceb&language=en-US&append_to_response=credits`)
            .then(response => {
                if (response.status !== 200) {
                    console.log('Error: ' + response.status);
                    return;
                }
                response.json().then(data => {
                    this.setState({ movieDetail: data })
                })
            })
            .catch(err => {
                console.log('Fetch Error::', err)
            })
    }

    componentDidMount() {
        this.fectMovieDetail()
    }
    render() {
        const movieDetail = this.state.movieDetail;
        return (
            <div className="container">
                <Header />
                <div className="movieDetail">
                    <div className="poster">
                        <img src={movieDetail.poster_path === null ? 'http://via.placeholder.com/640x960' :
                            `https://image.tmdb.org/t/p/w640${movieDetail.poster_path}`} alt={`${movieDetail.title} poster`}
                            className="posterImg" />
                    </div>
                    <div className="movieDetails">
                        <ul className="detailsList">
                            <h2>{movieDetail.title}</h2>
                            <li><strong>Release Date:</strong> {movieDetail.release_date}</li>
                            <li><strong>Rating:</strong> {movieDetail.vote_average}</li>
                            <li><strong>Vote Count:</strong> {movieDetail.vote_count}</li>
                            <li><strong>Genres:</strong> {movieDetail.genres.map((element, index) => {
                                if (index < movieDetail.genres.length - 1) {
                                    return movieDetail.genres[index].name + ', '
                                }
                                else {
                                    return movieDetail.genres[index].name
                                }

                            })}</li>
                            <li><strong>Overview:</strong> {movieDetail.overview}</li>
                        </ul>
                    </div>
                   
                     </div>
                     <div className="cast">
                     <Cast cast={movieDetail.credits.cast}/>
                     </div>
            </div>

        )
    }
}

export default MovieDetail;