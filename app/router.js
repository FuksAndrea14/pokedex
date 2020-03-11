// express 
const express = require('express'); 

// routeur 
const router = express.Router(); 

// controllers
const mainController = require('./controllers/mainController'); 
const searchController = require('./controllers/searchController'); 

// routes
router.get('/', mainController.homePage); 
router.get('/pokemon/:numero', mainController.pokemonPage); 
router.get('/types', mainController.typesPage); 
router.get('/type/:typeId', mainController.pokemonByType); 
router.post('/search', searchController.searchResults); 

// route 404
router.use(mainController.page404); 

module.exports = router; 