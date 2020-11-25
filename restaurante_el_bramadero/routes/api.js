const express = require("express");
const router = express.Router();

const ordenesRoutes = require("./api/ordenesdb");

router.use("/ordenes", ordenesRoutes);

module.exports = router;
