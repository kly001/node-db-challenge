
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('projects').del()
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert([
        { project_name: 'Project 1', project_description:'This is the first project.', completed:false},
        { project_name: 'Project 2', project_description:'This is the second project.', completed:false},
        { project_name: 'Project 3', project_description:'This is the third project.', completed:false}
      ]);
    });
};
