import React from "react";
import Create from "./Create";

function Movies(props) {
  return (
    <div className="container p-4" id="box">
      <section className="border border-primary">
        <div className="row">
          <div className="col">
            <img src={props.image} alt=""></img>
          </div>
          <div className="col">
            <h2 className="text-center">
              <u>
                <b>{props.title}</b>
              </u>
            </h2>
            <h5 className="text-center pb-4">{props.plot}</h5>
            <Create />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Movies;
