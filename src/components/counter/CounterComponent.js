import React  from 'react';
import styles from './CounterStyled.module.css';
import counter from '../../store/counter';
import { observer } from "mobx-react";

const CounterComponent = observer(() => {
  // state = {
  //   count:0,
  // }
  // handleIncrement = () => {
  //   this.setState((prevState) => ({ count: prevState.count + 1 }))
  // }
  // handleDicrement = () => {
  //   this.setState((prevState) => ({ count: prevState.count - 1 }))
  // }
  return (
    <>
      <div className={styles.counterContainer}>
        <h2>{counter.total}</h2>
        <h2> value {counter.age}</h2>
        <button type="button"
          onClick={() => counter.increment()}
          className={styles.counterButton}>+</button>

        <button type="button"
          onClick={() => counter.decrement()}
          className={styles.counterButton}>-</button>
      </div>
    </>
  );
})
export default CounterComponent;