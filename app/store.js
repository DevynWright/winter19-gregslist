// import Job from "./Models/Job.js";
import Car from "./Models/Car.js";
// import House from "./Models/House.js";

let _state = {
  /** @type {Value[]} */
  jobs: [],
  houses: [],
  cars: [new Car({ make: "Chevy", model: "Tracker", year: 1989, price: 2000 })]
};
let _subscribers = {
  jobs: [],
  houses: [],
  cars: []
}

//NOTE You should not need to change the code from this point down

class Store {
  /**
   * Provides access to application state data
   */
  get State() {
    return _state;
  }
  subscribe(prop, fn){
    _subscribers[prop].push(fn)
    console.log(_subscribers)
  }
  commit(prop, data){
    _state[prop] = data
    _subscribers[prop].forEach(fn => fn());
    console.log(_state)
  }
}

const store = new Store();
export default store;
