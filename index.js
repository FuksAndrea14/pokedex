// variables d'environnement 
const dotenv = require('dotenv'); 
dotenv.config(); 

// express 
const express = require('express'); 
const app = express(); 

// for heroku
const { Pool } = require('pg');
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: true
});

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
const PORT = process.env.PORT; 

if (PORT == null || PORT == "") {
    PORT = 8000; 
}; 

// serveur
app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}.`); 
}); 