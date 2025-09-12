const express = require('express');
require('dotenv').config();
const aiRoutes=require('./src/routes/ai.routes');


const app = express(); // server is created 

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.use('/ai',aiRoutes);


app.listen(3000,()=>{
    console.log('Server is running on port 3000');
})