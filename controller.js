const express = require("express");
const mongoose = require("mongoose");
const cors = require('cors');   // cross origin


const { UsuarioModel } = require("./model_usuario");
const { ClienteModel } = require("./model_cliente");
const { ReservaModel } = require("./model_hospedaje");
const {TarifaModel}=require("./model_tarifa");
const { ServicioModel }=require("./model_servicios");
const app = express();

app.use(express.json());

app.use(cors());

app.get("/usuario", async (req, res) => {
  
  const TodosUsuarios = await UsuarioModel.find();
  return res.status(200).json(TodosUsuarios);
});

app.post("/usuario", async (req, res) => {
  console.log(req.body);
  const newUsuario = new UsuarioModel({ ...req.body });
  const insertedUsuario = await newUsuario.save();
  return res.status(201).json(insertedUsuario);
});

app.put("/usuario/:id", async (req, res) => {
  const { id } = req.params;
  await Dog.updateOne({ id }, req.body);
  const updatedDog = await Dog.findById(id);
  return res.status(200).json(updatedDog);
});

app.delete("/usuario/:id", async (req, res) => {
  const { id } = req.params;
  const eliminarUsuarios = await UsuarioModel.findByIdAndDelete(id);
  return res.status(200).json(eliminarUsuarios);
});

app.post("/cliente", async (req, res) => {
  console.log(req.body);
  const newCliente = new ClienteModel({ ...req.body });
  const insertedCliente = await newCliente.save();
  return res.status(201).json(insertedCliente);
});

app.get("/cliente", async (req, res) => {
  
  const TodosClientes = await ClienteModel.find();
  return res.status(200).json(TodosClientes);
});

app.delete("/cliente/:id", async (req, res) => {
  const { id } = req.params;
  const eliminarClientes = await ClienteModel.findByIdAndDelete(id);
  return res.status(200).json(eliminarClientes);
});
app.post("/reserva", async (req, res) => {
  console.log(req.body);
  const newReserva = new ReservaModel({ ...req.body });
  const insertedReserva = await newReserva.save();
  return res.status(201).json(insertedReserva);
});
app.get("/reserva", async (req, res) => {
  
  const TodosReservas = await ReservaModel.find();
  return res.status(200).json(TodosReservas);
});
app.delete("/reserva/:id", async (req, res) => {
  const { id } = req.params;
  const eliminarReserva = await ReservaModel.findByIdAndDelete(id);
  return res.status(200).json(eliminarReserva);
});
app.post("/precio", async (req, res) => {
  console.log(req.body);
  const newTarifa = new TarifaModel({ ...req.body });
  const insertedTarifa = await newTarifa.save();
  return res.status(201).json(insertedTarifa);
});
app.get("/precio", async (req, res) => {
  
  const TodosTarifas = await TarifaModel.find();
  return res.status(200).json(TodosTarifas);
});
app.delete("/precio/:id", async (req, res) => {
  const { id } = req.params;
  const eliminarPrecio = await TarifaModel.findByIdAndDelete(id);
  return res.status(200).json(eliminarPrecio);
});
app.post("/servicio", async (req, res) => {
  console.log(req.body);
  const newServicio = new ServicioModel({ ...req.body });
  const insertedServicio = await newServicio.save();
  return res.status(201).json(insertedServicio);
});
app.get("/servicio", async (req, res) => {
  
  const TodosServicio = await ServicioModel.find();
  return res.status(200).json(TodosServicio);
});
app.delete("/servicio/:id", async (req, res) => {
  const { id } = req.params;
  const eliminarServicio = await ServicioModel.findByIdAndDelete(id);
  return res.status(200).json(eliminarServicio);
});

const start = async () => {
  try {
    await mongoose.connect(
      "mongodb://localhost:27017/db_hotel"
      
    );
    app.listen(3000, () => console.log("Server started on port 3000"));
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

start();