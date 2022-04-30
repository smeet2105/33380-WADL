const express = require('express');
const app = express()
const PORT = 3000

app.use(express.static('public'))


app.get('/', (req, res)=>{
    res.send("Welcome to PICT, Pune!")
});

app.post('/', (req, res)=>{
    
})

app.listen(PORT || 3000)
