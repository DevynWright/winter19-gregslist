import HouseController from "./Controllers/HousesController.js";
import CarsController from "./Controllers/CarsController.js";
import JobsController from "./Controllers/JobsController.js";

class App {
  jobsController = new JobsController();
  carsController = new CarsController()
  houseController = new HouseController()
}

window["app"] = new App();
