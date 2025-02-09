const express = require('express')
const app = express()
const path = require("path")
const PORT = process.env.PORT || 5000;
app.get('^/$|busRoutes(.js)?',(req,res)=>{
    res.sendFile(path.join(__dirname,'routes','busRoutes.js'));
})
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));