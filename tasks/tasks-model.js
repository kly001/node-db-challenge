const db = require('../data/db-config.js');

module.exports = {
    find,
    findById,
    add,
    findProjects
    
}

function find() {
    return db('tasks');
}

function findById(id) {
    return db('tasks').where({id}).first();
}

function add(task) {
    return db('tasks').insert(task)
    .then(ids => {
         return findById(ids[0])
    })
}

function findProjects(task_id) {
    return db('projects as p')
    .join('tasks as t', 't.id', 'p.project_id')
    .select('p.project_name','p.project_description','t.task_description')
    .where({task_id})
}