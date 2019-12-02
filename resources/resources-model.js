const db = require('../data/db-config.js');

module.exports = {
    find,
    findById,
    add,
    update,
    remove
    
}

function find() {
    return db('resources');
}

function findById(id) {
    return db('resources').where({id}).first();
    }

    function add(resource) {
        return db('resources').insert(resource)
        .then(ids => {
             return findById(ids[0])
        })
    }

    function update(changes,id) {
        return db('resources').where({id}).update(changes)
        .then(count => {
            return findById(id)
        })
    }
    
    function remove(id) {
        return db('resources').where({id}).del()
    }