const express=require('express');
const bodyParser=require('body-parser');
const wagner=require('wagner-core');

require('./models/models')(wagner);

const brandRouter=require('./routers/brand.router')(wagner);
let app=express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

app.use("/brands",brandRouter);

module.exports=app;