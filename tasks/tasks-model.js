const db = require('../data/db-config.js');

module.exports = {
    find,
    findById,
    add,
    update,
    remove
    
}

function find() {
    return db('tasks')
}

// function findById(id) {
//     return db('tasks')
//     .where({id})
//     .first()
//     }

function findById(id) {
    return db('projects as p')
    .join('tasks as t','t.project_id', 'p.id')
    .select('t.id as TaskId','t.task_description',"t.completed as Completed",'p.project_name','p.project_description')
    .where({TaskId:id})
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