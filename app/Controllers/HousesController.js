import houseService from '../Services/HouseService.js'
import store from '../store.js'

function _drawHouses() {
  let template = "";
  let houses = store.State.houses;
  houses.forEach(h => template += h.Template);
  document.getElementById("inventory").innerHTML = template
}

export default class HouseController {
  constructor() {
    store.subscribe("houses", _drawHouses)
    _drawHouses()
  }

  addHouse(event) {
    event.preventDefault()
    let formData = event.target
    let newHouse = {
      city: formData.city.value,
      state: formData.state.value,
      year: formData.year.value,
      rooms: formData.rooms.value,
      price: formData.price.value
    }

    houseService.addHouse(newHouse)
    _drawHouses()
    formData.reset()
  }

  showForm(){
    document.getElementById("form-area").innerHTML =/*html*/
    `<form
            class="text-left p-3"
            onsubmit="app.houseController.addHouse(event)"
          >
            <div class="form-group">
              <label for="city">City</label>
              <input
                type="text"
                name="city"
                class="form-control"
                placeholder="Enter City..."
                required
              />
            </div>
            <div class="form-group">
              <label for="state">State</label>
              <input
                type="text"
                name="state"
                class="form-control"
                placeholder="Enter State..."
                required
              />
            </div>
            <div class="form-group">
              <label for="year">Year</label>
              <input
                type="number"
                name="year"
                class="form-control"
                placeholder="Enter Year..."
                required
              />
            </div>
            <div class="form-group">
              <label for="rooms">Rooms</label>
              <input
                type="number"
                name="rooms"
                class="form-control"
                placeholder="Enter Rooms..."
                required
              />
            </div>
            <div class="form-group">
              <label for="price">Price</label>
              <input
                type="number"
                name="price"
                class="form-control"
                placeholder="Enter Price..."
                required
              />
            </div>
            <button type="submit" class="btn btn-primary btn-block">
              Submit
            </button>
  </form>`
  }

  deleteHouse(id) {
    houseService.delortCar(id)
    _drawHouses()
    showForm()
  }
}