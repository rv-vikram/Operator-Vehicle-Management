const express = require("express");
const router = express.Router();
const Vehicle = require("../models/vehicle.model")


router.get("/", async function (req, res) {

    // if (req.query.page) {
    //     res.send(true);

    // } else {
    //     res.send(false);

    // }
    try {
        let page = req.query.page;
        let type = req.query.type;
        let capacity = req.query.capacity;

        let size = 12;
        const offset = (page - 1) * size;
        let TotalPage;
        let vehicle;
        if (type !== "none" && capacity !== "none") {
            vehicle = await Vehicle.find({ type: type, capacity: capacity }).skip(offset).limit(size);
            TotalPage = await Vehicle.find({ type: type, capacity: capacity }).count();
        } else if (type !== "none") {
            vehicle = await Vehicle.find({ type: type }).skip(offset).limit(size);
            TotalPage = await Vehicle.find({ type: type }).count();

        } else if (capacity !== "none") {
            vehicle = await Vehicle.find({ capacity: capacity }).skip(offset).limit(size);
            TotalPage = await Vehicle.find({ capacity: capacity }).count();

        } else {
            vehicle = await Vehicle.find().skip(offset).limit(size);
            TotalPage = await Vehicle.find().count();

        }

        let count = Math.ceil(TotalPage / 12);
        res.status(200).send({ vehicle, count, currentPage: +page });
    } catch (error) {
        console.log(error);
    }
})



module.exports = router;