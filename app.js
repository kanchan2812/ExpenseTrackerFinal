const express = require('express');
const app = express();
const bodyParser=require('body-parser');
const cors=require('cors');


const dotenv=require('dotenv');
dotenv.config()
const PORT=process.env.PORT;




const sequelize=require('./Utils/database');
const expenseroutes=require('./routes/expenseroutes');
const loginsignupRoutes=require('./routes/loginsignupRoutes');
const productRoutes=require('./routes/product');
const premiumFeatureRoutes=require('./routes/premiumFeature');
const resetPasswordRoutes=require('./routes/forgotpassword')


const Expense = require('./models/expenses.model');
const User=require('./models/user.model');
const Order=require('./models/orders.model');
const ForgotPassword=require('./models/forgotpassword.model');
const fs=require('fs');
const path=require('path')




app.use(cors());
app.use(bodyParser.json({ extended: false })); ////this is for handling forms
app.use(bodyParser.json());


app.use('/user',loginsignupRoutes);
app.use('/expense',expenseroutes);
app.use('/purchase',productRoutes);
app.use('/premium',premiumFeatureRoutes);
app.use('/password',resetPasswordRoutes);

app.use((req,res,next)=>{
    console.log('urlll',req.url);
    console.log('Updated req.url');
    res.sendFile(path.join(__dirname,`public/${req.url}`))
});




///relationshipSequelize
User.hasMany(Expense);
Expense.belongsTo(User);


User.hasMany(Order);
Order.belongsTo(User);


User.hasMany(ForgotPassword);
ForgotPassword.belongsTo(User)





async function initiate(){
    try{
        await sequelize.sync();
        app.listen(PORT,()=>{
            console.log(`server is running at${PORT}`);
        });
    }catch(error){
        console.log(error);
    }
}
initiate();






