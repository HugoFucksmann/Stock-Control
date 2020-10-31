const Product = require('../models/product');


const getStock = async (req, res) => {
  const product = await Product.find();
  res.json({
    ok: true,
    product
  });
}

const getbyCode = async (req, res) => {
  const products = await Product.find();
  const productCode = products.map((res) => res.barcode )
  const code = req.params.code
  for ( let i in productCode){
   
    if (code === productCode[i]) {
      console.log('coindide!!');
      console.log(productCode[i]);

      
      res.json({
        ok: true,
        barcode: code
      });
    }
  }
  
  
};

const createProduct = async (req, res) => {

  const product = new Product({
    ...req.body
  })
   try {
     const productDB = await product.save();

     res.json({
       ok: true,
       product: productDB,
     });
   } catch (error) {
     console.log(error);
     res.status(500).json({
       ok: false,
       msg: "error inesperado, hable con el administrador",
     });
   }
}

const putCode = async (req, res) => {
  
  const code = req.params.code
  const id = "5f9c7484efc6d5bdfec864c4";

  try {
    const product = await Product.findById(code);
    
    if (!product) {
       return res.status(404).json({
         ok: false,
         msg: "producto no encontrado",
       });
    }
    const cambios = {
      ...req.body,
      barcode: code,
    };
    
    const codeActualizado = await Product.findByIdAndUpdate(id, cambios, { new: true } );
    res.json({
      ok: true,
      codeActualizado,
    });

  } catch (error) {
    console.log(error);
    res.status(500).json({
      ok: false,
      msg: "Error hsble con el admin",
    });
  }

}

module.exports = {
  getStock,
  createProduct,
  putCode,
  getbyCode,
};