export default class Job {
    constructor(data) {
      this.company = data.company || "Unknown";
      this.position = data.position || "Unknown";
      this.pay = data.pay || "Free";
    }
  
    get Template() {
      return `
              <div class="col-3 m-3 p-2 border rounded bg-dark">
                  <h2>${this.company}</h2>
                  <h2>${this.position}</h2>
                  <h2>${this.pay}</h2>
                  <button class="btn btn-danger btn-block" onclick="app.carsController.delortCar(${index})">Delort</button>
              </div>
      `;
    }
    
  }