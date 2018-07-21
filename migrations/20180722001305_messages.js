
exports.up = function(knex, Promise) {
    return knex.schema.createTableIfNotExists('messages', table => {
      table.increments('id').primary()
      table.integer('sender_id')
      table.integer('receiver_id')
      table.string('content')
      table.timestamp('published').defaultTo(knex.fn.now())
    })
  };
  
  exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('messages')
  };
  
