import express from "express";
//import products from "./data/products.js";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import productRoutes from "./routes/productRoutes.js";
import { notFound, errorHandler } from "./middleware/errorMiddleware.js";

dotenv.config();
connectDB();

const app = express();

app.get("/", (req, res) => {
  res.send("Server is Running");
});

app.use("/api/products", productRoutes);

app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;
//console.log(port);
app.listen(
  PORT,
  console.log(
    `Servere is Listening in ${process.env.NODE_ENV} mode on Port ${PORT}`
  )
);
