import express from "express";
import Product from "../modals/productModel.js";
import asyncHandler from "express-async-handler";

const router = express.Router();

// @descr: Fetch All prodcuts
// @route: Get /api/products
// @access: Public
router.get(
  "/",
  asyncHandler(async (req, res) => {
    const products = await Product.find({});

    res.json(products);
  })
);

// @descr: Fetch single prodcuts
// @route: Get /api/product/:id
// @access: Public
router.get(
  "/:id",
  asyncHandler(async (req, res) => {
    const product = await Product.findById(req.params.id);
    console.log(product);
    if (product) {
      res.json(product);
    } else {
      res.status(404);
      throw new Error("Product not Found");
    }
  })
);

export default router;
