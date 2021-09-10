const express = require("express");
const passport = require("passport");

const vehicleController = require("../controllers/vehicleController");

const router = express.Router();

// TODO students or teacher should not be allow to create vehicles
//@route   GET /api/vehicle
//@desc    Get all vehicles
//@access  Private
router.get("/", vehicleController.findAll);


//@route   GET /api/vehicle:id
//@desc    Get vehicle by id
//@access  Private
router.get("/:id", vehicleController.findById);

//@route   POST /api/vehicle
//@desc    Create a new vehicle
//@access  Private
router.post("/", vehicleController.create);

//@route   PUT /api/vehicle:id
//@desc    Updates vehicle by id
//@access  Private
router.put("/:id", vehicleController.update);

//@route   DELETE /api/vehicle:id
//@desc    Deletes vehicle by id
//@access  Private
router.delete("/:id", vehicleController.delete);

module.exports = router;