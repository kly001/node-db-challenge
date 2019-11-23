const db = require('../data/db-config.js');

module.exports = {
    find,
    findById
    
}

function find() {
    return db('tasks');
}

function findById(id) {
    return db('tasks').where({id}).first();
    }