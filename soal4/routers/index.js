const router = require("express").Router();
const ProductController = require("../controller/product");
router.get("/products", ProductController.list);
router.get("/product/:id", ProductController.getById);
router.post("/products", ProductController.create);
router.delete("/products/:id", ProductController.delete);
module.exports = router;
