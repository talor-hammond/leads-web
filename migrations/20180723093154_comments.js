
exports.up = function(knex, Promise) {
    return knex.schema.createTableIfNotExists('comments', table => {
      table.increments('id').primary()
      table.integer('user_id')
      table.integer('post_id')
      table.string('content')
      table.timestamp('published', 6).defaultTo(knex.fn.now(6))
    })
  };
  
  exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('comments')
  };
  