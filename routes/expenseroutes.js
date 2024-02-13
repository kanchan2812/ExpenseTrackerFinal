const express=require('express')

const routes=express.Router();

const expenseController=require('../controllers/expense.controller');
const userAuthenticate=require('../middlewares/authenticate.middleware');

routes.post('/addexpenses',userAuthenticate.authenticate,expenseController.addexpense);
routes.get('/getexpenses',userAuthenticate.authenticate,expenseController.getexpense);
routes.delete('/delete-expense/:id',userAuthenticate.authenticate,expenseController.deleteExpense);

module.exports=routes;