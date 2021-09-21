import React from "react";
import styles from "./Filter.module.css";
import todo from "../../store/todo";
import { observer } from 'mobx-react';

const Filter = observer(() => {

  const handleFilter = (evt) => {
    todo.updateFilter(evt.target.value)
  };

  return (
    <div className={styles.mainContainer}>
      <div className={styles.inputContainer}>
        <label className={styles.labelName} htmlFor="filter">
          Find contact by name
        </label>
        <input
          onChange={handleFilter}
          type="text"
          name="filter"
          id="filter"
          value={todo.filter}
          className={styles.inputName}
        ></input>
      </div>
    </div>
  );
});

export default Filter;
