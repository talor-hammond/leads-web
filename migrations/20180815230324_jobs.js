exports.up = function(knex, Promise) {
    return knex.schema.createTableIfNotExists('jobs', table => {
        table.uuid('id').primary()
        table.string('category')
        table.binary('image') // needs review, is .binary() the right method for a decoded image?
        table.string('title')
        table.string('description')
        table.string('skills_required')
        table.string('when')
        table.string('address')
        table.text('lat')
        table.text('lng')
        table.timestamp('published')
        table.integer('user_id')
    }) 
}

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('jobs')
}