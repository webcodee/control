const mongoose = require("mongoose");

const controlSchema = new mongoose.Schema(
  {
    raza: { type: String, required: true },
    sexo: { type: String, required: true },
    nombre: { type: String, required: true },
    servicio: { type: String, required: true },
    dueño: { type: String, required: true },
    telefono1: { type: Number, required: true },
    telefono2: { type: Number, required: true },
    precio: { type: Number, required: true },
    hora: { type: String, default: new Date().toLocaleTimeString() },
    fecha: { type: String, default: new Date().toLocaleDateString() },
    inStock: { type: Boolean, default: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Control", controlSchema);