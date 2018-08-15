
exports.up = function(knex, Promise) {
  return knex.schema.createTableIfNotExists('users', table => {
    table.increments('id')
    table.string('email')
    table.string('user_name')
    table.binary('avatar')
    table.string('hash')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('users')
};
