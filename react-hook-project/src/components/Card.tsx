/**
 * @fileoverview Card component
 */
import React, { FC } from "react";
import CardStyles from './Card.module.css';
import RatingStars from "./RatingStars";

type Props = {
  main: string,
  section: string,
  rating: number,
  togglerTri: boolean,
  clicked: () => void,
};
const Card: FC<Props> = (props) => {

  const triStyles = [CardStyles.triangleDown].concat(
    props.togglerTri ? CardStyles.triangleDownOpen : '');

  return (
    <div className={CardStyles.card}>
      <main id={CardStyles.main}>{props.main}</main>
      <div id={CardStyles.ribbon} onClick={props.clicked}>
        <svg className={CardStyles.svg}
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          viewBox="-5 -3 35 35">
          <path className={CardStyles.path}
            d="M18.12 14.44l-3.24-1.62c1.29-1 2.12-2.56 2.12-4.32C17 5.47 14.53 3 11.5 3S6 5.47 6 8.5c0 2.13 1.22 3.98 3 4.89v3.26l-1.84-.39-.1-.02c-.1-.02-.2-.03-.32-.03-.53 0-1.03.21-1.41.59l-1.4 1.42 5.09 5.09c.43.44 1.03.69 1.65.69h6.3c.98 0 1.81-.7 1.97-1.67l.8-4.71c.22-1.3-.43-2.58-1.62-3.18zm-.35 2.85l-.8 4.71h-6.3c-.09 0-.17-.04-.24-.1l-3.68-3.68 4.25.89V8.5c0-.28.22-.5.5-.5s.5.22.5.5v6h1.76l3.46 1.73c.4.2.62.63.55 1.06zM8 8.5C8 6.57 9.57 5 11.5 5S15 6.57 15 8.5c0 .95-.38 1.81-1 2.44V8.5C14 7.12 12.88 6 11.5 6S9 7.12 9 8.5v2.44c-.62-.63-1-1.49-1-2.44z" />
        </svg>
      </div>
      <section id={CardStyles.section}>
        <RatingStars rating={props.rating} />
        {props.section}
      </section>
      <div className={triStyles.join(' ')}></div>
    </div>
  )
};

export default Card;
