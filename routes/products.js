import express from 'express';
import { addProduct , allProducts , pById , updateProduct , deleteProduct } from '../controllers/products.js';
const router = express.Router();

// add product 
router.post('/add',addProduct);
router.get('/all',allProducts);
router.get('/:id',pById);
router.put('/:id',updateProduct);
router.delete('/:id',deleteProduct)
export default router;
