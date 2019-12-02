const db = require('../data/db-config.js');

module.exports = {
    find, 
    findById,
    add,
    update,
    remove
    
}
''
function find() {
    return db('projects');
}

function findById(id) {
    return db('tasks as t')
    .join('projects as p', 't.project_id', 'p.id')
    .select('p.project_name','p.project_description','t.id as TaskId','t.task_description',"t.completed as Completed")
    .where({project_id:id})
    }

function add(project) {
    return db('projects').insert(project)
    .then(ids => {
         return findById(ids[0])
    })
}
function update(changes,id) {
    return db('projects').where({id}).update(changes)
    .then(count => {
        return findById(id)
    })
}

function remove(id) {
    return db('projects').where({id}).del()
}