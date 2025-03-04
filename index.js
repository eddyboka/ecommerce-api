import express from "express";
import productsRouter from "./routes/products.js";
import mongoose from "mongoose";


//Make Database connection


await mongoose.connect(process.env.MONGO_URI);



//create an express app
const app = express();
const port = 3000;

//use global middleware
app.use(express.json());

//use routes
app.use(productsRouter);



//listen for incoming products
app.listen(port, () => {
  console.log(`Server is listening on ${port}`);
});
