// variables d'environnement 
const dotenv = require('dotenv'); 
dotenv.config(); 

// express 
const express = require('express'); 
const app = express(); 

// réglages ejs 
app.set('view engine', 'ejs'); 
app.set('views', 'app/views'); 

// fichiers statiques
app.use(express.static('public')); 

// urlencoded
app.use(express.urlencoded({
    extended: true
})); 

// routeur
const router = require('./app/router'); 
app.use(router); 

// port
let PORT = process.env.PORT; 
if (PORT == null || PORT == "") {
    PORT = 8080; 
}; 

// serveur
app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}.`); 
}); 