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

module.exports = router;
