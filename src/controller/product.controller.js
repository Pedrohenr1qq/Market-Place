const productService = require('../service/product.service');


const findProductById = async (req, res) => {
  try {
    return res.send(await productService.findProductById(req.params.id));

  } catch (err) {
    console.log(`Error in find PRODUCT by id: ${err.message}`);
    return res.status(500).send({message: "Internal Error. Trye again later."});
  }
}

const findAllProducts = async (req, res) => {
  try {
    res.send(await productService.findAllProducts());

  } catch (err) {
    console.log(`Error in find all PRODUCTS: ${err.message}`);
    return res.status(500).send({message: "Internal Error. Trye again later."});
  }
}

const createProduct = async (req, res) => {
  try {
    const newProduct = {
      ... req.body,
      userId: req.userId,
    }

    return res.status(201).send(await productService.createProduct(newProduct));

  } catch (err) {
    console.log(`Error in create a new PRODUCT: ${err.message}`);
    return res.status(500).send({message: "Internal Error. Trye again later."});
  }
}

const updateProduct =  async (req, res) => {
  try {
    return res.send(await productService.updateProduct(req.params.id, req.body));
  } catch (error) {
    console.log(`Error in update a PRODUCT: ${err.message}`);
    return res.status(500).send({message: "Internal Error. Trye again later."});
  }
}

const deleteProduct = async (req, res) => {
  try {
    return res.send(await productService.deleteProduct(req.params.id)); 
  } catch (err) {
    console.log(`Error in delete a PRODUCT: ${err.message}`);
    return res.status(500).send({message: "Internal Error. Trye again later."});
  }
}

const addCategoryToProduct = async (req, res) => {
  try {
    const category = await productService.addCategoryToProduct(req.params.id, req.body);

    console.log("Category added");
    res.send(category);

  } catch (err) {
    console.log(`Error in delete a PRODUCT: ${err.message}`);
    return res.status(500).send({message: "Internal Error. Trye again later."});
  }
}

const removeCategoryFromProduct = async (req, res) => {
  try {
    const category = await productService.removeCategoryFromProduct(req.params.id, req.body);

    console.log("Category removed");
    res.send(category);

  } catch (err) {
    console.log(`Error in delete a PRODUCT: ${err.message}`);
    return res.status(500).send({message: "Internal Error. Trye again later."});
  }
}

module.exports = {
  findProductById,
  findAllProducts,
  createProduct,
  updateProduct,
  deleteProduct,
  addCategoryToProduct,
  removeCategoryFromProduct
}