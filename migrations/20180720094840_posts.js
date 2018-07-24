
exports.up = function(knex, Promise) {
  return knex.schema.createTableIfNotExists('posts', table => {
    table.increments('id').primary()
    table.string('address')
    table.string('topic')
    table.string('title')
    table.string('description')
    table.decimal('lat', 10, 10)
    table.decimal('long', 10, 10)
    table.integer('user_id')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('posts')
};
