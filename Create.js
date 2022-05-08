import React from "react";
import { useState } from "react";

const Create = () => {
  const [review, setReview] = useState("");
  const [reviewValue, setReviewValue] = useState([]);
  const [stars, setStars] = useState("");
  const [starsValue, setStarsValue] = useState([]);

  const createReview = (event) => {
    event.preventDefault();

    setReviewValue((oldArray) => [...oldArray, review]);
    setStarsValue((oldArray) => [...oldArray, stars]);
  };

  return (
    <div className="container">
      <form>
        <label>What is your rating out of 5?:</label>
        <select
          className="form-control"
          id="rate"
          value={stars}
          onChange={(event) => setStars(event.target.value)}
        >
          <option value="1 Star">1</option>
          <option value="2 Stars">2</option>
          <option value="3 Stars">3</option>
          <option value="4 Stars">4</option>
          <option value="5 Stars">5</option>
        </select>
        <div className="form-group">
          <label>Please leave your review here:</label>
          <textarea
            className="form-control"
            rows="3"
            value={review}
            onChange={(event) => setReview(event.target.value)}
          ></textarea>
          <button className="btn btn-primary" onClick={createReview}>
            Submit
          </button>
          <label>Reviews:</label>
          <ul>
            {reviewValue.map((arrayElement, i) => {
              return (
                <li key={i} pt-2>
                  {" "}
                  {starsValue[i]} {arrayElement}
                </li>
              );
            })}
          </ul>
        </div>
      </form>
    </div>
  );
};

export default Create;
