const { Router } = require("express");
const { check } = require("express-validator");
const { getStock } = require("../controllers/stock");

const router = Router();


router.get('/', getStock );




module.exports = router;