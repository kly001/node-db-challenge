const db = require('../data/db-config.js');

module.exports = {
    find,
    findById
    
}

function find() {
    return db('resources');
}

function findById(id) {
    return db('resources').where({id}).first();
    }