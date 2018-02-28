import React from 'react';
import './cast.css'

const Cast = (props) => {
    return(
       <div>
          <h3 className="heading">Cast</h3>
          <div className="figureContainer">
              {props.cast.slice(0,6).map((element, index) => {
                  return(
                      <figure key={index}>
                      <img src = {props.cast[index].profile_path === null ? 
                        'http://via.placeholder.com/640x960' : 'https://image.tmdb.org/t/p/w300' + props.cast[index].profile_path}
                        key={index} 
                        alt={props.cast[index].name}
                        className="imgResponsive"/>
                        <figcaption>{props.cast[index].name}</figcaption>
                      </figure>
                  )
              })}
              </div>
            </div>
    )
}

export default Cast;