import carService from '../Services/CarService.js'
import store from '../store.js'

function _drawCars() {
  let template = "";
  let cars = store.State.cars;
  cars.forEach(c => template += c.Template);
  document.getElementById("inventory").innerHTML = template
}

export default class CarsController {
  constructor() {
    store.subscribe("cars", _drawCars)
    _drawCars()
  }

  addCar(event) {
    event.preventDefault()
    let formData = event.target
    let newCar = {
      make: formData.make.value,
      model: formData.model.value,
      year: formData.year.value,
      price: formData.price.value
    }

    carService.addCar(newCar)
    _drawCars()
    formData.reset()

    console.log(event.target.make.value)
  }

  delortCar(carIndex) {
    carService.delortCar(carIndex)
    _drawCars()
    showForm()
  }
}