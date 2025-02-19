const express = require("express");
const cors = require("cors");
const axios = require("axios");

//express js server
const app = express();
const PORT = 7000;
app.use(cors()); // ربط بين الrequest والresponse
app.use(express.json());//تحويل الdata الى json 

const url = "https://fakestoreapi.com/products";

app.get("/products", async (req, res) => {
  const response = await axios.get(url);
  if (response.data) {
    res.status(200).json(response.data); //لعرضهم على الصفحة في حالة نجاح جلب البيانات
  }
});
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});