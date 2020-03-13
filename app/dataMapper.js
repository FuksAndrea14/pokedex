// connexion à la database
const pg = require('pg'); 
const client = new pg.Client(process.env.DATABASE_URL); 
client.connect();

// dataMapper
const dataMapper = {
    // récupération de tous les Pokemon
    getAllPokemon: (callback) => {
        client.query(`SELECT * FROM pokemon;`, callback); 
    }, 

    // récupération des détails d'un Pokemon
    getPokemonDetails: (numero, callback) => {
        const myQuery = `SELECT * FROM pokemon WHERE numero=${numero}.`; 
        client.query(myQuery, callback); 
    }, 

    // récupération des types des Pokemon
    getPokemonTypes: (numero, callback) => {
        const myQuery = `SELECT * FROM type t
        JOIN pokemon_type pt ON t.id = pt.type_id
        WHERE pt.pokemon_numero=${numero}`; 
        client.query(myQuery, callback); 
    }, 

    // récupération de tous les types
    getAllTypes: (callback) => {
        const myQuery = "SELECT * FROM type"; 
        client.query(myQuery, callback); 
    }, 

    // récupération d'un Pokemon par type
    getPokemonByType: (typeId, callback) => {
        const myQuery = `SELECT * FROM pokemon p
        JOIN pokemon_type pt ON p.numero=pt.pokemon_numero
        WHERE pt.type_id=${typeId}`; 
        client.query(myQuery, callback); 
    }, 

    // récupération d'un Pokemon par son nom en recherche
    getPokemonByName: (name, callback) => {
        const myQuery = `SELECT * FROM pokemon
        WHERE nom ILIKE '%${name}%'`; 
        client.query(myQuery, callback); 
    }
}; 

module.exports = dataMapper; 