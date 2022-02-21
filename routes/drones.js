const express = require("express");
const router = express.Router();

// require the Drone model here
const DroneModel = require("../models/Drone.model.js");

router.get("/drones", async (req, res, next) => {
  // Iteration #2: List the drones
  try {
    const allDrones = await DroneModel.find();
    console.log(allDrones);
    res.render("drones/list.hbs", { allDrones });
  } catch (err) {
    next(err);
  }
});

router.get("/drones/create", (req, res, next) => {
  // Iteration #3: Add a new drone
  res.render("drones/create-form.hbs");
});

router.post("/drones/create", async (req, res, next) => {
  // Iteration #3: Add a new drone

  // Req.body para capturar la data enviada por el usuario
  const{name, propellers, maxSpeed} = req.body

  try {
    //*1 CREAR MODELO
    DroneModel.create({
      name, 
      propellers, 
      maxSpeed
    })
    //* 2 REDIRECCIONAR
    res.redirect("/drones")
  } 

  //* MANEJAR ERRORES
  catch (err) {
    next(err);
  }
});

router.get("/drones/:id/edit", (req, res, next) => {
  // Iteration #4: Update the drone
  // ... your code here
});

router.post("/drones/:id/edit", (req, res, next) => {
  // Iteration #4: Update the drone
  // ... your code here
});

router.post("/drones/:id/delete", (req, res, next) => {
  // Iteration #5: Delete the drone
  // ... your code here
});

module.exports = router;
