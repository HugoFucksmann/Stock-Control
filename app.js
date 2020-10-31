const express = require("express");
require("dotenv").config();

const cors = require("cors");
const { dbConnection } = require("./database/config");
const path = require("path");


const app = express();
app.use(cors());
app.use(express.json());
dbConnection();
app.use(express.static("public"));

app.use("/stock", require("./routes/stock"));



app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "public/index.html"));
});

app.listen(process.env.PORT, () => {
  console.log("server iniciado en puerto ", process.env.PORT);
});