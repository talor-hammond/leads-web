
exports.up = function(knex, Promise) {
  return knex.schema.createTableIfNotExists('posts', table => {
    table.increments('id').primary()
    table.string('address')
    table.string('topic')
    table.string('title')
    table.string('description')
    table.text('lat')
    table.text('long')
    table.integer('user_id')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('posts')
};
