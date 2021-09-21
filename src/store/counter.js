import {makeAutoObservable, extendObservable, configure, observable, computed, action} from "mobx";
import { decorate } from 'mobx';

class Counter {
  age = 28
  name = "Alex"
  constructor() {
    makeAutoObservable(this, {
      age: observable,
      name: observable,
      increment: action,
      decrement: action,
      total: computed,
    })
  }
  increment() {
    this.age = this.age + 1
  }
  decrement() {
    this.age = this.age - 1
  }
  get total() {
    return `name + age  = ` + this.name + this.age
  }
}
//  decorate(Counter, {
//   age: observable,
//   name: observable,
//   total: computed,
//   increment: action,
//   decrement: action,
// })
export default new Counter();

// configure({ enforceActions: 'observed' });
// const Counter = observable({
//   age: 28,
//   name: "Alex",
//   increment() {
//     this.age = this.age + 1
//   },
//   decrement() {
//     this.age = this.age - 1
//   },
//   get total() {
//     return `name + age  = ` + this.name + this.age
//   },
// }, {
//   increment: action,
//   decrement: action,
// })
// export default Counter;