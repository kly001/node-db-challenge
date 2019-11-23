
exports.up = function(knex) {
    return knex.schema
    .createTable('projects', tbl => {
        tbl.increments();
        tbl.text('project_name')
          .unique()
          .notNullable();
        tbl.text('project_description');
        tbl.boolean('completed'); 
      })
    .createTable('tasks', tbl => {
        tbl.increments();
        tbl.text('task_description')
          .notNullable();
        tbl.boolean('completed');
        tbl.integer('project_id')
          .unsigned()
          .notNullable()
          .references('projects.id')
          .onUpdate('CASCADE')
          .onDelete('CASCADE');
        tbl.text('task_notes');
        })
    .createTable('resources', tbl => {
        tbl.increments();
        tbl.text('resource_name', 128)
           .unique()
           .notNullable();
        tbl.text('resource_description')
          })
    .createTable('project_resources', tbl => {
        tbl.increments();
        tbl.integer('project_id')
            .unsigned()
            .notNullable()
            .references('projects.id')
            .onUpdate('CASCADE')
            .onDelete('CASCADE');
        tbl.integer('resource_id')
            .unsigned()
            .notNullable()
            .references('resources.id')
            .onUpdate('CASCADE')
            .onDelete('CASCADE');  
        })
  
};

exports.down = function(knex) {
    return knex.schema
      .dropTableIfExists('project_resources')
      .dropTableIfExists('resources')
      .dropTableIfExists('tasks')
      .dropTableIfExists('projects');
  };