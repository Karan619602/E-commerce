import { Router } from 'express';
const router = Router();

import  {getproducts,getsingleproduct,updateproduct,deleteproduct,newproducts}  from '../controllers/getproducts.js'


router.get('/products', getproducts)
router.get('/product/:id',getsingleproduct)
router.post('/create/product',newproducts)


router.put('/products/:id',updateproduct)
router.delete('/products/:id',deleteproduct)




export default router;