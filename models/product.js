const { Schema, model } = require("mongoose");

const productSchema = Schema({
    nombre:{
        type: String,
        required: true
    },
    price:{
        type: Number,
        required: true
    },
    barcode:{
        type: Number
    },
    vencimiento:{
        type: String
    }
},{ collection: 'stock' });

productSchema.method("toJSON", function () {
  const { __v, ...Object } = this.toObject();

  return Object;
});

module.exports = model("products", productSchema);