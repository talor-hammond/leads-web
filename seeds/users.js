
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {id: 1, first_name: 'Brad', last_name: 'Johnson', email: 'bradj@gmail.com', user_name: 'BradJ', hash: 'igldhagidshfgdfhgdsjkgdf'}
      ]);
    });
};
