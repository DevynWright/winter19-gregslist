import jobService from '../Services/JobService.js'
import store from '../store.js'

function _drawJobs() {
  let template = "";
  let jobs = store.State.jobs;
  jobs.forEach(j => template += j.Template);
  document.getElementById("inventory").innerHTML = template
}

export default class JobsController {
  constructor() {
    store.subscribe("jobs", _drawJobs)
    _drawJobs()
  }

  addJob(event) {
    event.preventDefault()
    let formData = event.target
    let newJob = {
      company: formData.company.value,
      position: formData.position.value,
      pay: formData.pay.value
    }

    jobService.addJob(newJob)
    _drawJobs()
    formData.reset()
  }

  showForm(){
    document.getElementById("form-area").innerHTML = /*html*/
    `<form
            class="text-left p-3"
            onsubmit="app.jobsController.addJob(event)"
          >
            <div class="form-group">
              <label for="company">Company</label>
              <input
                type="text"
                name="company"
                class="form-control"
                placeholder="Enter Company..."
                required
              />
            </div>
            <div class="form-group">
              <label for="position">Position</label>
              <input
                type="text"
                name="position"
                class="form-control"
                placeholder="Enter Position..."
                required
              />
            </div>
            <div class="form-group">
              <label for="pay">Pay</label>
              <input
                type="number"
                name="pay"
                class="form-control"
                placeholder="Enter Pay..."
                required
              />
            </div>
            <button type="submit" class="btn btn-primary btn-block">
              Submit
            </button>
  </form>`
  }

  deleteJob(id) {
    jobService.deleteJob(id);
    _drawJobs();
    showForm()
  }
}