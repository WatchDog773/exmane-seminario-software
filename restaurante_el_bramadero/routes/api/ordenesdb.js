const express = require("express");
const router = express.Router();

const ordenModelClass = require("../../models/ordenModel");
const modelDataOrden = new ordenModelClass();

router.get("/all", async (req, res, next) => {
  try {
    const result = await modelDataOrden.getAll();
    res.status(200).json(result);
  } catch (error) {
    console.log(error);
    res.status(500).json({ mensaje: "algo salio mal" });
  }
});

router.get("/one/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await modelDataOrden.getOneById(id);
    res.status(200).json(result);
  } catch (error) {
    console.log(error);
    res.status(500).json({ mensaje: "algo salio mal" });
  }
});

router.post("/new", async (req, res, next) => {
  try {
    const { nombre, email, telefono, producto, kindPay, state } = req.body;
    const result = await modelDataOrden.addOne({
      nombre,
      email,
      telefono,
      producto,
      kindPay,
      state,
    });
    res.status(200).json(result);
  } catch (error) {
    console.log(error);
    res.status(500).json({ mensaje: "algo salio mal" });
  }
});

router.put("/update/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const { state } = req.body;
    const result = await modelDataOrden.updateOneById(id, state);
    res.status(200).json(result);
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
