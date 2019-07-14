/**
 * @fileoverview Star component
 */
import React, { FC } from "react";
import Star from "./Star";
import { randomId } from "./random";

type Props = { rating: number };
const RatingStars: FC<Props> = (props) => {

  const ratings: number[] = [];
  const STARS_PERCENT = 20;
  const NUMBER_OF_STARS = 5;
  const stars = Math.floor(props.rating / STARS_PERCENT);
  const ALL_STARS = [100, 100, 100, 100, 100];

  if (stars >= 5) {
    ratings.push(...ALL_STARS);
  } else {
    ratings.push(...Array(stars).fill(100));
    let r = props.rating % STARS_PERCENT;
    ratings.push(100 * (r / STARS_PERCENT));
    let remain = NUMBER_OF_STARS - (stars + 1);
    if (remain > 0) {
      ratings.push(...Array(remain).fill(0));
    }
  }

  return (
    <div>
      {ratings.map(rating => <Star key={randomId()} rating={rating} />)}
    </div>
  )
};

export default RatingStars;
