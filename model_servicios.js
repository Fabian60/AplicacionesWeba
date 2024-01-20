const mongoose = require("mongoose");

const serviSchema = new mongoose.Schema({
  
  nombre_servicio: {
    type: String,
    required: true,
  },
  descripcion_servicio: {
    type: String,
    required: true,
  },
  turno_servicio: {
    type: String,
    required:true,
  },
  costo_servicio: {
    type: Number,
    required:true,
  },
  isGoodBoy: {
    type: Boolean,
    required: false,
    default: true,
  },
});

const ServicioModel = mongoose.model("Servicio_hotel", serviSchema);

module.exports = { ServicioModel };