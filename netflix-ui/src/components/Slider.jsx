import React from "react";
import { CardSlider } from "./CardSlider";

export const Slider = React.memo(({ movies }) => {
  const getMoviesFromRange = (from, to) => {
    return movies.slice(from, to);
  };

  return (
    <div>
      <CardSlider title="Trending Now" data={getMoviesFromRange(0, 10)} />
      <CardSlider title="New Releases" data={getMoviesFromRange(10, 20)} />
      <CardSlider title="Netflix Originals" data={getMoviesFromRange(20, 30)} />
      <CardSlider
        title="Popular On Netflix"
        data={getMoviesFromRange(30, 40)}
      />
      <CardSlider
        title="Action and Adventure"
        data={getMoviesFromRange(40, 50)}
      />
      <CardSlider title="Blockbuster" data={getMoviesFromRange(50, 60)} />
    </div>
  );
});
