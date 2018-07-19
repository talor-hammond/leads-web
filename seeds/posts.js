
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('posts').del()
    .then(function () {
      // Inserts seed entries
      return knex('posts').insert([
        {id: 1, title: 'leads', lat: 2.0, long: 5.3, user_id: '1'},
        {id: 2, title: 'jumper', lat: 4.0, long: 6.32, user_id: '1'},
        {id: 3, title: 'jumperleads', lat: 5.4, long: 3.2, user_id: '1'}
      ]);
    });
};
