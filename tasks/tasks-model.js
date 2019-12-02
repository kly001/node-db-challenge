const db = require('../data/db-config.js');

module.exports = {
    find,
    findById,
    add,
    update,
    remove
    
}

function find() {
    return db('tasks');
}

function findById(id) {
    return db('tasks')
    .where({id})
    .first();
}

function add(task) {
    return db('tasks').insert(task)
    .then(ids => {
         return findById(ids[0])
    })
}

function update(changes,id) {
    return db('tasks').where({id}).update(changes)
    .then(count => {
        return findById(id)
    })
}

function remove(id) {
    return db('tasks').where({id}).del()
}