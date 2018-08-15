
exports.up = function(knex, Promise) {
 return knex.schema.createTableIfNotExists('general_posts', table => {
     table.uuid('id').primary()
     table.string('category')
     table.string('title')
     table.string('description')
     table.string('address')
     table.text('lat')
     table.text('lng')
     table.timestamp('published')
     table.integer('user_id')
 }) 
}

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('general_posts')
}
