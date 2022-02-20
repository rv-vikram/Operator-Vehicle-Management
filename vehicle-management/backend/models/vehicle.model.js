const mongoose = require("mongoose");

const vehicleSchema = new mongoose.Schema({
    "make": { type: String },
    "model": { type: String },
    "year": { type: Number },
    "registration": { type: String },
    "type": { type: String },
    "capacity": { type: Number },
    "image": { type: String },
    "trips": { type: Array }
}, {
    versionKey: false,
    timestamps: true
})

module.exports = mongoose.model("vehicle", vehicleSchema);