const mongoose = require("mongoose");

const LoginSchema = new mongoose.Schema({
  
  Nombres_login: {
    type: String,
    required: true,
  },
  Usuario_login: {
    type: String,
    required:true,
  },
  Password_login: {
    type: String,
    required: true,
    
  },
  isGoodBoy: {
    type: Boolean,
    required: false,
    default: true,
  },
});

const UsuarioModel = mongoose.model("login", LoginSchema);

module.exports = { UsuarioModel };