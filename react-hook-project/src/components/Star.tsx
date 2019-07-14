/**
 * @fileoverview Star component
 */
import React, {FC} from "react";
import StarStyles from './Star.module.css';

type Props = {rating: number};
const Star: FC<Props> = (props) => {
  const styles = [StarStyles.star];

  if (props.rating >= 100) {
    styles.push(StarStyles.fill);
  } else if (props.rating <= 80 && props.rating > 50) {
    styles.push(StarStyles.half80);
  } else if (props.rating <= 50 && props.rating > 20) {
    styles.push(StarStyles.half20);
  }

  return (
    <span className={styles.join(' ')}>&#x2605;</span>
  )
};

export default Star;