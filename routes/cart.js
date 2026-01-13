import express from 'express';
import { addToCart, clearCart, decreasePQ, removeProductFromCart, userCart } from '../controllers/cart.js';
import { isAuthenticated } from './../middlewares/Auth.js';

const router = express.Router();

router.post('/add', isAuthenticated , addToCart);
router.get('/get', isAuthenticated , userCart);
router.delete('/remove/:productId', isAuthenticated , removeProductFromCart);
router.delete('/clear', isAuthenticated , clearCart);
router.post('/--qty', isAuthenticated , decreasePQ);
export default router;