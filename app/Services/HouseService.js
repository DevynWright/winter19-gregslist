import store from "../store.js"
import House from "../Models/House.js"

class HouseService {
  deleteHouse(id) {
    store.State.cars.splice(id, 1)
  }
  addHouse(houseData) {
    //carData is a POJO 
    // new Car(data) is expecting data that represents a car and returns and instance of our model
    let house = new House(houseData)
    //car is now an instance of the Car class
    store.State.houses.push(house)
    console.log(store.State.houses)
  }


  constructor() {
    console.log("hello from house service")
  }
}

const houseService = new HouseService()

export default houseService 