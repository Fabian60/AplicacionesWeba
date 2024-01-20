const mongoose = require("mongoose");

const tarifaSchema = new mongoose.Schema({
  
  tipo_habitacion: {
    type: String,
    required: true,
  },
  numero_habitacion: {
    type: String,
    required: true,
  },
  Precio: {
    type: Number,
    required:true,
  },
  
  isGoodBoy: {
    type: Boolean,
    required: false,
    default: true,
  },
});

const TarifaModel = mongoose.model("Habitacion_hotel", tarifaSchema);

module.exports = { TarifaModel };