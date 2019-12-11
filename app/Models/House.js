export default class House {
    constructor(data) {
      this.city = data.city || "Unknown";
      this.state = data.state || "Unknown";
      this.year = data.year || "Unknown";
      this.price = data.price || "Free";
      this.rooms = data.rooms || "Free";
    }
  
    get Template() {
      return `
              <div class="col-3 m-3 p-2 border rounded bg-dark">
                  <h2>${this.city}</h2>
                  <h2>${this.state}</h2>
                  <h2>${this.rooms}</h2>
                  <h5>${this.year}</h5>
                  <h5>${this.price}</h5>
                  <button class="btn btn-danger btn-block" onclick="app.carsController.delortCar(${index})">Delort</button>
              </div>
      `;
    }
    
  }