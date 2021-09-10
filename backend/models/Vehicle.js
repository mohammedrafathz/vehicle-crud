const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const VehicleSchema = new Schema({
    make: {type: String},
    vehicleModel: {type: String},
    year: {type: Number},
    price: {type: Number},
    status: {type: Boolean, default: false}
});

module.exports = Vehicle = mongoose.model("Vehicles", VehicleSchema);
