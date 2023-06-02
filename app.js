const express=require('express')
const app=new express();
var morgan = require('morgan');
const api=require('./routes/sample');
require('dotenv').config();
app.use(morgan('dev'));
app.use('/api',api);

const PORT=process.env.PORT;
app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`); 
});