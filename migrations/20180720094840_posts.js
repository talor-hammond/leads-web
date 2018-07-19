
exports.up = function(knex, Promise) {
  return knex.schema.createTableIfNotExists('posts', table => {
    table.increments('id').primary()
    table.string('title')
    table.decimal('lat')
    table.decimal('long')
    table.integer('user_id')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('posts')
};
