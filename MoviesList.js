import React from "react";
import Movies from "./Movies";

import CoachCarter from "/Users/kyoazumaya/Desktop/bootcamp_assignment/movie-review/src/coachcarter.jpg";
import GloryRoad from "/Users/kyoazumaya/Desktop/bootcamp_assignment/movie-review/src/gloryroad.jpg";
import SpaceJam from "/Users/kyoazumaya/Desktop/bootcamp_assignment/movie-review/src/spacejam.jpg";

const listOfMovies = [
  {
    title: "Coach Carter",
    plot: "Controversy surrounds high school basketball coach Ken Carter after he benches his entire team for breaking their academic contract with him.",
    image: CoachCarter,
  },
  {
    title: "Glory Road",
    plot: "In 1966, Texas Western coach Don Haskins led the first all-black starting line-up for a college basketball team to the NCAA national championship.",
    image: GloryRoad,
  },
  {
    title: "Space Jam",
    plot: "In a desperate attempt to win a basketball match and earn their freedom, the Looney Tunes seek the aid of retired basketball champion, Michael Jordan.",
    image: SpaceJam,
  },
];

function MoviesList() {
  return (
    <div>
      {listOfMovies.map((list, index) => {
        const { image, title, plot } = list;
        console.log(image, title, plot);
        return (
          <Movies
            key={index}
            image={list.image}
            title={list.title}
            plot={list.plot}
          />
        );
      })}
    </div>
  );
}

export default MoviesList;
