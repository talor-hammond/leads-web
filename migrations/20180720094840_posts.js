
exports.up = function(knex, Promise) {
  return knex.schema.createTableIfNotExists('posts', table => {
    table.increments('id').primary()
    table.string('address')
    table.string('topic')
    table.string('title')
    table.string('description')
    table.decimal('lat', null)
    table.decimal('long', null)
    table.integer('user_id')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('posts')
};
