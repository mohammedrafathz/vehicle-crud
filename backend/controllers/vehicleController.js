const Vehicle = require("../models/Vehicle");

exports.create = async (req, res) => {
  const {make, year, price, vehicleModel, status} = req.body;

  try {
    const newVehicle = await Vehicle.create({make, year, price, vehicleModel, status})

    return res.status(200).json({
      message: "Vehicle created successfully.",
      vehicle: newVehicle
    });
  } catch (error) {
    res.status(400).json({error: error.message});
  }
};

exports.findAll = async (req, res) => {
  try {
    const vehicles = await Vehicle.find({});

    return res.status(200).json(vehicles)
  } catch (error) {
    res.status(400).json({error: error.message})
  }
};

exports.findById = async (req, res) => {
  try {
    const vehicle = await Vehicle.findById(req.params.id)

    return res.status(200).json(vehicle);
  } catch (error) {
    return res.status(400).json({error: error.message})
  }
};

exports.update = async (req, res) => {
  const {make, year, price, vehicleModel, status} = req.body;
  const {id} = req.params;

  try {
    const updatedVehicle = await Vehicle.findByIdAndUpdate(
      id,
      {
        make,
        year,
        price,
        vehicleModel,
        status
      }
    );

    return res.status(200).json(updatedVehicle)
  } catch (error) {
    return res.status(400).json({error: error.message})
  }
};

exports.delete = async (req, res) => {
  try {
    const Vehicle = await Vehicle.findByIdAndDelete(req.params.id);

    return res.status(404).json({message: "Vehicle was deleted."})
  } catch (error) {
    res.status(400).json({error: error.message})
  }
};