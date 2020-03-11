// variables d'environnement 
const dotenv = require('dotenv'); 
dotenv.config(); 

// port
const PORT = process.env.PORT || 8080; 

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

// serveur
app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}.`); 
}); 