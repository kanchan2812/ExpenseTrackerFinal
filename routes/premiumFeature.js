const express=require('express');
const premiumController=require('../controllers/premiumFeature.controller')
const userAuthenticate=require('../middlewares/authenticate.middleware')


const router=express.Router();

router.get('/showLeaderBoard',userAuthenticate.authenticate,premiumController.getUserLeaderBoard);


module.exports=router;
