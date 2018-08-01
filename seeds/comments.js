
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('comments').del()
    .then(function () {
      // Inserts seed entries
      return knex('comments').insert([
        {user_id: 1, post_id: 1, content: 'Everyone is invited'},
        {user_id: 1, post_id: 2, content: 'Can I bring my uncle bobbo?'},
        {user_id: 1, post_id: 1, content: 'U sure can'},
        {user_id: 2, post_id: 1, content: 'This comment should turn up as well'},
        {user_id: 3, post_id: 2, content: 'Hi, this is a test comment, cheers'}
      ]);
    });
};
