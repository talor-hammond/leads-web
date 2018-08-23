
exports.up = function(knex, Promise) {
 return knex.schema.createTableIfNotExists('general_posts', table => {
     table.increments('id').primary()
     table.string('category') // set this property as 'general_posts' in the client? 
     table.string('title')
     table.string('description')
     table.string('region')
     table.string('address') // these can be 'null' -- TODO: conditional in route
     table.text('lat')
     table.text('lng')
     table.timestamp('published', 6).defaultTo(knex.fn.now(6))
     table.integer('user_id')
 }) 
}

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('general_posts')
}
