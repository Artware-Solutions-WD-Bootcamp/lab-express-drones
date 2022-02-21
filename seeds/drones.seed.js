// Iteration #1
//TODO 1. Define info array
const dronesArr = [
  { name: "Creeper XL 500", propellers: 3, maxSpeed: 12 },
  { name: "Racer 57", propellers: 4, maxSpeed: 18 },
  { name: "Courier 3000i", propellers: 6, maxSpeed: 18 }
];

//TODO 2. Require model
const DroneModel = require("../models/Drone.model.js")

//TODO 3. Require modeler
const mongoose = require("mongoose")

//TODO 4. Connect to DB
mongoose.connect("mongodb://localhost/lab-express-drones")
.then((response) => {
  console.log("Conectado a DB")
  //TODO 5. Insert movies
  return DroneModel.create(dronesArr)
})
.then((response) => {
  console.log("Nro. de drones insertados: ", response.length)
  console.log("Drones insertados", response)
  mongoose.connection.close()
})
.catch((err) => {
  console.log(err)
})