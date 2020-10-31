const { Router } = require("express");
const { check } = require("express-validator");
const { getStock, createProduct, putCode, getbyCode } = require("../controllers/stock");
const { validarCampos } = require("../middlewares/validar-campos");

const router = Router();


router.get('/', getStock );

router.get("/code/:code", getbyCode);

router.put("/:code", putCode);

router.post(
  "/",
  [
    check("name", "el nombre del producto es necesario").notEmpty(),
    check("description", "la descripcion del producto es necesario").notEmpty(),
    check("price", "el precio del producto es necesario").notEmpty(),
    validarCampos,
  ],
  createProduct
);




module.exports = router;