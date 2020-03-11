// dataMapper
const dataMapper = require('../dataMapper'); 

const mainController = {
    // gestion de la page d'accueil 
    homePage: (request, response) => {
        dataMapper.getAllPokemon((error, data) => {
            // si erreur
            if (error) {
                console.error(error); 
                return response.status(500).send(error); 
            }; 

            // sinon
            response.render('home', {
                pokemons: data.rows
            }); 
        }); 
    }, 

    // gestion page individuelle d'un Pokemon
    pokemonPage: (request, response) => {
        response.locals.statsLabels = {
            pv: 'PV',
            attaque: 'Attaque',
            defense: 'Défense',
            attaque_spe:'Attaque Spé.',
            defense_spe:'Défense Spé.',
            vitesse: 'Vitesse'
        };

        const pokemonNum = request.params.numero; 
        dataMapper.getPokemonDetails(pokemonNum, (error, data) => {
            if (error) {
                console.error(error); 
                return response.status(500).send(error); 
            }; 

            dataMapper.getPokemonTypes(pokemonNum, (error2, data2) => {
                if (error2) {
                    console.error(error2); 
                    return response.status(500).send(error2); 
                }; 

                response.render('details', {
                    pokemon: data.rows[0], 
                    types: data2.rows
                }); 
            }); 
        });
    }, 

    // gestion page des types
    typesPage: (request, response) => {
        dataMapper.getAllTypes((error, data) => {
            if (error) {
                console.error(error); 
                return response.status(500).send(error); 
            };

            response.render('types', {
                types: data.rows
            }); 
        }); 
    },

    // gestion Pokemon par type
    pokemonByType: (request, response) => {
        const typeId = request.params.typeId; 
        dataMapper.getPokemonByType(typeId, (error, data) => {
            if (error) {
                console.error(error); 
                return response.status(500).send(error); 
            }; 

            response.render('home', {
                pokemons: data.rows
            }); 
        }); 
    },

    // gestion 404
    page404: (request, response) => {
        response.render('404'); 
    }
}; 

module.exports = mainController; 