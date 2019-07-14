/**
 * @fileoverview Card container component 
 */
import React, { FC, useState } from "react";
import Card from "./Card";
import Styles from './CardContainer.module.css';

type Props = { rating: number };
const CardContainer: FC<Props> = (props) => {

  const [openTri, setOpenTri] = useState<boolean>(false);

  const cardOnClickHandler = () => {
    setOpenTri(!openTri);
  }

  const collapsibleContentStyles = [Styles.collapsibleContent].concat(
    openTri ? Styles.collapsibleContentOpen : '');

  return (
    <React.Fragment>
      <Card rating={props.rating} main="" section=""
        togglerTri={openTri} clicked={cardOnClickHandler} />
      <div className={Styles.wrappedToggleCollapsible}>
        <div className={collapsibleContentStyles.join(' ')}>
          <p>Using one selector at a time is useful, but can be inefficient in some situations. CSS
          selectors become evenmore useful when you start combining them to perform fine-grained selections.</p>
        </div>
      </div>
    </React.Fragment>
  );
};

export default CardContainer;
