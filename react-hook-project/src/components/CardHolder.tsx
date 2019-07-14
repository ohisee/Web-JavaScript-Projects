/**
 * @fileoverview Card holder component
 */
import React, { FC, useState } from "react";
import Card from "./Card";

type Props = { rating: number };
const CardHolder: FC<Props> = (props) => {

  const [openTri, setOpenTri] = useState<boolean>(false);

  const cardOnClickHandler = () => {
    setOpenTri(!openTri);
  }

  return (
    <Card
      main="Main"
      section="section"
      rating={props.rating}
      togglerTri={openTri}
      clicked={cardOnClickHandler} />
  )
};

export default CardHolder;
