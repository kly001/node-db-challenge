
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('tasks').del()
    .then(function () {
      // Inserts seed entries
      return knex('tasks').insert([
        {task_description: 'Task A needs to be done', project_id:1, completed: "false"},
        {task_description: 'Task B needs to be done', project_id:2, completed: "true"},
        {task_description: 'Task C needs to be done', project_id:3, completed: "false"},
        {task_description: 'Task D needs to be done', project_id:2, completed: "true"},
        {task_description: 'Task E needs to be done', project_id:3, completed: "false"},
        {task_description: 'Task F needs to be done', project_id:1, completed: "true"},
        {task_description: 'Task G needs to be done', project_id:3, completed: "false"},
        {task_description: 'Task H needs to be done', project_id:1, completed: "true"},
       
      ]);
    });
};
