const mongoose = require('mongoose');
    schema = mongoose.Schema;
    
var WatchSchema = Schema({
    modelo:{
        type: String,
        required: true,
        unique: true
    },
    marca: String,
    tipo: String,
    precio: Number
});

module.exports = mongoose.model("Reloj",WatchSchema);