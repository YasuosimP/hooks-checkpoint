import React from 'react'
import StarRatingComponent from 'react-star-rating-component';

const MovieCard = ({movie}) => {
    return (
      <div class="movie_card" id="bright">
      <div class="info_section">
        <div class="movie_header">
          <img class="locandina" src={movie.img}/>
          <h3>{movie.title}</h3>
          <h4>Release year: {movie.date} </h4>
          <StarRatingComponent 
          name="rate1" 
          starCount={5}
          value={movie.rate}
          
        />
          <span class="minutes">{movie.duration}</span>
          <p class="type">{movie.genre}</p>
        </div>
        <div class="movie_desc">
          <p class="text">
           {movie.description}
          </p>
        </div>
      </div>
      
    </div>
  );
}
 


export default MovieCard
