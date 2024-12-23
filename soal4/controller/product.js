const { Products } = require("../models");

class ProductController {
  static async list(req, res) {
    try {
      const products = await Products.findAll();
      res.status(200).json({ success: true, data: products });
    } catch (error) {
      console.error(error);
      res.status(500).json({
        success: false,
        message: "Internal server error",
        error: error.message,
      });
    }
  }

  static async getById(req, res) {
    try {
      const { id } = req.params;
      const product = await Products.findByPk(id);

      if (!product) {
        return res
          .status(404)
          .json({ success: false, message: "Product not found" });
      }
      res.status(200).json({ success: true, data: product });
    } catch (error) {
      console.error(error);
      res.status(500).json({
        success: false,
        message: "Internal server error",
        error: error.message,
      });
    }
  }

  static async create(req, res) {
    try {
      const { name, price } = req.body;

      if (!name || !price) {
        return res.status(400).json({
          success: false,
          message: "Name, price are required",
        });
      }

      const newProduct = await Products.create({
        name,
        price,
      });
      res.status(201).json({ success: true, data: newProduct });
    } catch (error) {
      console.error(error);
      res.status(500).json({
        success: false,
        message: "Internal server error",
        error: error.message,
      });
    }
  }

  static async delete(req, res) {
    try {
      const { id } = req.params;
      const product = await Products.findByPk(id);

      if (!product) {
        return res
          .status(404)
          .json({ success: false, message: "Product not found" });
      }

      await product.destroy();
      res
        .status(200)
        .json({ success: true, message: "Product deleted successfully" });
    } catch (error) {
      console.error(error);
      res.status(500).json({
        success: false,
        message: "Internal server error",
        error: error.message,
      });
    }
  }
}

module.exports = ProductController;
