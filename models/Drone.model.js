// Iteration #1
// - `name` - String (name of the drone model, like _General Atomics MQ-9 Reaper_)
// - `propellers` - Number (amount of propellers, like _4_)
// - `maxSpeed` - Number (meters per second for the drone's maximum speed, like _18_)

//TODO 1. requerir mongoose
const mongoose = require("mongoose")

//TODO 2. crear esquema
const droneSchema = new mongoose.Schema({
  name: String,
  propellers: {
    type: Number,
    default: 4
  },
  maxSpeed: {
    type: Number,
    max: 18
  }
})

//TODO 3. crear modelo
const DroneModel = mongoose.model("Drone", droneSchema)

//TODO 4. exportar modelo
module.exports = DroneModel