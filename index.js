import express from "express";
import productsRouter from "./routes/products.js";

//create an express app
const app = express();
const port = 3000;

//use routes
app.use(productsRouter);

//listen for incoming products
app.listen(port, () => {
  console.log(`Server is listening on ${port}`);
});
