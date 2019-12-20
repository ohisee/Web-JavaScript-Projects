/**
 * @fileoverview Description of this file.
 */
import React, { useState, useEffect, useRef } from "react";
import Card from "../UI/Card";
import Styles from './Search.module.css';

const Search = React.memo((props) => {
  const { onLoadIngridents, ingridients } = props;
  const [enteredFilter, setEnteredFilter] = useState('');
  const inputRef = useRef();

  useEffect(() => {
    const timer = setTimeout(() => {
      // enteredFilter is the older value when timer is done
      if (enteredFilter === inputRef.current.value) {
        if (ingridients) {
          const filteredIngridients = ingridients.filter(
            ig => ig.title.includes(enteredFilter));
          if (filteredIngridients.length > 0) {
            onLoadIngridents(filteredIngridients);
          }
        }
      }
    }, 500);
    // Clean up function
    return () => {
      clearTimeout(timer);
    };
  }, [enteredFilter, onLoadIngridents, ingridients, inputRef]);

  return (
    <section className={Styles["search"]}>
      <Card>
        <div className={Styles["search-input"]}>
          <label>Filter by Title</label>
          <input type="text"
            ref={inputRef}
            value={enteredFilter}
            onChange={(event) => setEnteredFilter(event.target.value)} />
        </div>
      </Card>
    </section>
  );
});

export default Search;
