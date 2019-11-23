
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('resources').del()
    .then(function () {
      // Inserts seed entries
      return knex('resources').insert([
        {resource_name: 'Resource Z', resource_description: 'Resource Z is used to complete some tasks.'},
        {resource_name: 'Resource Y', resource_description: 'Resource Y is used to complete some tasks.'},
        {resource_name: 'Resource X', resource_description: 'Resource X is used to complete some tasks.'},
        {resource_name: 'Resource W', resource_description: 'Resource X is used to complete some tasks.'},
      
      ]);
    });
};
