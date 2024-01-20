const mongoose = require("mongoose");

const ReservaSchema = new mongoose.Schema({
  
  Nombre_reserva: {
    type: String,
    required: true,
  },
  Nhabitacion_reserva: {
    type: String,
    required:true,
  },
  Tipo_habitacion_reserva: {
    type: String,
    required:true,
  },
  Cantidad_personas_reserva: {
    type: String,
    required: true,
    
  },
  Fecha_Ingreso_reserva: {
    type: String,
    required: true,
    
  },
  Fecha_Salida_reserva: {
    type: String,
    required: true,
    
  },
  Cantidad_dias_reserva: {
    type: Number,
    required: true,
    
  },
  Precio_reserva: {
    type: Number,
    required: true,
  },
  Total_reserva: {
    type: Number,
    required: true,
  },
  comentarios_reserva:{
    type: String,
    required:true,
  },
  isGoodBoy: {
    type: Boolean,
    required: false,
    default: true,
  },
});

const ReservaModel = mongoose.model("Reservacion", ReservaSchema);

module.exports = { ReservaModel };