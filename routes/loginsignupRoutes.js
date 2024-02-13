const express=require('express');

const routes=express.Router();

const expenseController=require('../controllers/expense.controller')
const loginsignupController=require('../controllers/loginsignup.controller');
const userAuthenticate=require('../middlewares/authenticate.middleware');



routes.post('/signup',loginsignupController.postSignup);

routes.post('/login',loginsignupController.postLogin);

routes.get('/download',userAuthenticate.authenticate,expenseController.downloadexpense)





module.exports=routes;