import React, { useState } from "react";
import StarRatingComponent from 'react-star-rating-component';

const Search = ({search,setRate,newRate}) => {
    const [rating, setRating] = useState(1)
    const onStarClick=(nextValue, prevValue, name)=> {
        setRate(nextValue);
      }
  return (
    <div>
      <div className="container">
        <div className="search">
          <div className="row">
            <div className="col-md-6">
              <div className="search-1">
                {" "}
                <i className="bx bx-search-alt" />{" "}
                <input type="text" placeholder="Search a movie " onChange={(e)=>search(e.target.value)} />{" "}
                
              </div>
            </div>
          </div>
        </div>
      </div>
      <StarRatingComponent 
          name="rate1" 
          starCount={5}
          value={newRate}
          
        />
    </div>
    
   
  );
};

export default Search;
