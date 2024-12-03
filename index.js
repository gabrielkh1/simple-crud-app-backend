const mongoose = require("mongoose");
const express = require("express");
const productRoute = require("./routes/product.route");
const app = express();

//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//routes
app.use("/api/products", productRoute);

app.get("/", (req, res) => {
  res.send("Hello from node API Server");
});

mongoose
  .connect(
    "mongodb+srv://mongo:mongo@cluster0.w5fsb.mongodb.net/Node-API?retryWrites=true&w=majority&appName=Cluster0"
  )
  .then(() => {
    console.log("Connected to MongoDB");
    app.listen(3000, () => {
      console.log(`Server is running on port 3000`);
    });
  })
  .catch(() => {
    console.log("Connection failed");
  });
