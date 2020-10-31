const { Schema, model } = require("mongoose");

const productSchema = Schema({
    name:{
        type: String,
        required: true
    },
    description:{
        type: String,
        required: true
    },
    date:{
        type: Date
        
    },
    price:{
        type: Number,
        required: true
    },
    barcode:{
        type: String
    },
    vencimiento:{
        type: String
    }
},{ collection: 'stock' });

productSchema.method("toJSON", function () {
  const { __v, ...Object } = this.toObject();

  return Object;
});

module.exports = model("Products", productSchema);