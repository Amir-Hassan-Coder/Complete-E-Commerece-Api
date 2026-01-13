import productModel from "../models/Products.js";

// add product 
export const addProduct = async (req, res) => {
  try {
    const product = await productModel.create(req.body);
    res.status(200).json({
      message: "product added succsesfully ",
      product,
      succes: true,
    });
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
};


// get all products 
export const allProducts = async (req,res)=>{
    try {
        const allProduct = await productModel.find();
        res.status(200).json({
            message:"this is All PRoducts ", 
            allProduct,
            succes:true
        })
    } catch (error) {
        res.status(400).json({
      message: error.message,
    });
    }
}

// get product by id 
export const pById = async (req,res)=>{
   try {
    const { id } = req.params;   // ✅ id get karo

    const productById = await productModel.findById(id);

    if (!productById) {
      return res.status(404).json({
        message: "Product not found",
        success: false
      });
    }

    res.status(200).json({
      message: "This is specific product",
      success: true,
      product: productById
    });

  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
}

// update product by id 
export const updateProduct = async (req,res)=>{
    try {
        const bdata = req.body;
        const {id} = req.params;
        const updateProduct = await productModel.findByIdAndUpdate(id,bdata , {new:true, runValidators:true});

        if (!updateProduct) {
            return res.status(400).json({
                message:"product id not found",
                succes:false
            });
        }

        res.status(200).json({
            message:"product updated succesfully ",
            succes:true,
            updateProduct
        })
    } catch (error) {
         res.status(500).json({
      message: error.message
    });
    }
}
// delete product by id 
export const deleteProduct = async (req,res)=>{
    try {
        const {id} = req.params;
        const deleteProduct = await productModel.findByIdAndDelete(id);
        if (!deleteProduct) {
             return res.status(400).json({
                message:"product id not found",
                succes:false
            });
        }
      
res.status(200).json({
            message:"product delete succesfully ",
            succes:true,
            deleteProduct
        })
    } catch (error) {
         res.status(500).json({
      message: error.message
    });
    }
}