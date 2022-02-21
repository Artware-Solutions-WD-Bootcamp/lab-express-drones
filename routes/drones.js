const express = require("express");
const router = express.Router();

// require the Drone model here
const DroneModel = require("../models/Drone.model.js");

router.get("/drones", async (req, res, next) => {
  // Iteration #2: List the drones
  try {
    const allDrones = await DroneModel.find();
   // console.log(allDrones);
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
  const { name, propellers, maxSpeed } = req.body;

  try {
    //*1 CREAR MODELO
    DroneModel.create({
      name,
      propellers,
      maxSpeed,
    });
    //* 2 REDIRECCIONAR
    res.redirect("/drones");
  } catch (err) {
    //* MANEJAR ERRORES
    next(err);
  }
});

// router.get("/drones/:id/edit", async (req, res, next) => {
//   // Iteration #4: Update the drone
//   const {id} = req.params
//   //PASAR ID
//   try{
//     const createdDrone = await DroneModel.findById(id)
//     res.render ("drones/update-form.hbs", {createdDrone} )
//   }
//   catch(err){
//     next(err)
//   }
// });

router.get("/drones/:id/edit", (req, res, next) => {
  // Iteration #4: Update the drone
  const { id } = req.params

  //PASAR ID
  DroneModel.findById(id)
  .then((thisDrone) =>{
    // console.log(thisDrone)
  res.render("drones/update-form.hbs", { thisDrone })
  })
  .catch((err) => {
    next(err);
  });
});


router.post("/drones/:id/edit", async (req, res, next) => {
  // Iteration #4: Update the drone
  const {id} =req.params;
  const { name, propellers, maxSpeed } = req.body;

  try{
    await DroneModel.findByIdAndUpdate(id, { name, propellers, maxSpeed } )
    res.redirect("/drones")  
  }
  catch (err){
    next(err)
  }
});

router.post("/drones/:id/delete", (req, res, next) => {
  // Iteration #5: Delete the drone
  // ... your code here
});

module.exports = router;
