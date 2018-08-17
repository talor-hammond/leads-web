
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {email: 'bradj@gmail.com', user_name: 'BradJ', hash: 'igldhagidshfgdfhgdsjkgdf'},
        {email: 'tay@gmail.com', user_name: 'tay2000', hash: 'somethingreallyencryptedcheers'}
      ]);
    });
};
