const dataMapper = require('../dataMapper'); 

const searchController = {
    searchResults: (request, response) => {
        const searchedName = request.body.nom; 
        dataMapper.getPokemonByName (searchedName, (error, data) => {
            if (error) {
                console.log(error); 
                return response.status(500).send(error); 
            }; 

            response.render('home', {
                pokemons: data.rows
            }); 
        }); 
    }
}; 

module.exports = searchController; 