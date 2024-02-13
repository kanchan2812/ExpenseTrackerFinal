const express=require('express');

const purchaseController=require('../controllers/purchase.controller');
const authenticatemiddleware=require('../middlewares/authenticate.middleware');

const router= express.Router();

router.get('/premiummembership',authenticatemiddleware.authenticate,purchaseController.purchasepremium);

router.post('/updatetransactionstatus',authenticatemiddleware.authenticate,purchaseController.updateTransactionStatus);


module.exports=router;