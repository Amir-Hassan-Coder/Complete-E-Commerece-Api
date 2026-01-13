import cartSchemaModel from "../models/Cart.js";

// add to cart 

export const addToCart = async(req,res)=>{
    try {
        const {productId,title,price,qty} = req.body;
    const userId = req.user;

    let cart = await cartSchemaModel.findOne({userId});

    if (!cart) {
        cart = new cartSchemaModel({userId,items:[]});
    }

    const itemIndex = cart.items.findIndex((item)=>{
        item.productId.toString() == productId
    });

    if (itemIndex > -1) {
        cart.items[itemIndex].qty += qty;
        cart.items[itemIndex].price += price*qty;

    }else{
        cart.items.push({productId,title,price,qty});
    }
    await cart.save();
    res.json({
        message:"Items added to cart " , cart , succses:true
    })
    } catch (error) {
        res.status(400).json({
            message:error.message,
        });
    }

}

// get user cart 

export const userCart = async (req,res)=>{
    try {
        const userId = req.user;
        const cart = await cartSchemaModel.findOne({userId});
        if (!cart) {
           return res.status(400).json({
                message:"Cart is not found"
            });
        }

        res.status(200).json({
            message:"All Added User carts is " , 
            cart,
            succses:true
        })
    } catch (error) {
        res.status(400).json({
            message:error.message,
        });
    }
}


export const removeProductFromCart = async (req,res)=>{
    const productId = req.params.productId;
    const userId = req.user;

    let cart = await cartSchemaModel.findOne({userId});

     if (!cart) {
           return res.status(400).json({
                message:"Cart is not found"
            });
        }

        cart.items = cart.items.filter((item)=>{
            item.productId.toString() !== productId
        });

      await  cart.save();
      res.json({
        message:"Product removed from cart ",
        cart
      })
    
}


// clear complete cart 

export const clearCart = async(req,res)=>{
    const userId = req.user;
    let cart = await cartSchemaModel.findOne({userId});

    if (!cart) {
        cart = new cartSchemaModel({items:[]});
    }else{
        cart.items = [];
    }

    await cart.save();

    res.json({
        message:"User Cart Clearded"
    })
}


// decreaded cart quantity;

export const decreasePQ = async (req,res)=>{
    try {
        const {productId,qty} = req.body;
    const userId = req.user;

    let cart = await cartSchemaModel.findOne({userId});

    if (!cart) {
        cart = new cartSchemaModel({userId,items:[]});
    }

    const itemIndex = cart.items.findIndex((item)=>{
        item.productId.toString() == productId
    });

    if (itemIndex > -1) {
        const item = cart.items[itemIndex];

        if (item.qty > qty) {
            const pricePU = item.price/item.qty;

            item.qty -= qty;
            item.price -= pricePU*qty;
        }else{
            cart.items.splice(itemIndex,1);
        }



    }else{
     res.json({
        message:"Invalid Product Id"
     })
    }
    await cart.save();
    res.json({
        message:"Items added to cart " , cart , succses:true
    })
    } catch (error) {
        res.status(400).json({
            message:error.message,
        });
    }

}