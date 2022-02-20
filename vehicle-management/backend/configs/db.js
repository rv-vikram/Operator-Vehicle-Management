const mongoose = require("mongoose");

module.exports = () => mongoose.connect("mongodb+srv://vehicle:945273@cluster0.1ixgt.mongodb.net/myFirstDatabase?retryWrites=true&w=majority");

