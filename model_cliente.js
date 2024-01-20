const mongoose = require("mongoose");

const clienteSchema = new mongoose.Schema({
  
  Nombre_cliente: {
    type: String,
    required: true,
  },
  Dni_cliente: {
    type: String,
    required:true,
  },
  Direccion_cliente: {
    type: String,
    required: true,
    
  },
  Telefono_cliente: {
    type: String,
    required: true,
  },
  Sexo_cliente:{
    type: String,
    required:true,
  },
  Mail_cliente:{
    type: String,
    required:true,
  },
  isGoodBoy: {
    type: Boolean,
    required: false,
    default: true,
  },
});

const ClienteModel = mongoose.model("Cliente", clienteSchema);

module.exports = { ClienteModel };