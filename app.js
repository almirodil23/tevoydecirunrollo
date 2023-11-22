const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const path = require('path');


app.use(express.json());

app.listen(port,() =>{
    console.log(`Servidor escuchando desde http://localhost:${port}`)})


app.use(express.static(path.join(__dirname, 'public')));

app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'login.html'));
    });
    
app.get('/bienvenida', (req, res) => {
     res.sendFile(path.join(__dirname, 'public', 'welcome.html'));
    });
    
