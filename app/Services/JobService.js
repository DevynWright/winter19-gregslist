import store from "../store.js"
import Car from "../Models/Job.js"
import Job from "../Models/Job.js"

class JobService {
  deleteCar(id) {
    store.State.cars.splice(id, 1)
  }
  addJob(jobData) {
    //carData is a POJO 
    // new Car(data) is expecting data that represents a car and returns and instance of our model
    let job = new Job(jobData)
    //car is now an instance of the Car class
    store.State.jobs.push(car)
    console.log(_store.State.cars)
  }


  constructor() {
    console.log("hello from job service")
  }
}

const jobService = new JobService()

export default jobService 