
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('messages').del()
    .then(function () {
      // Inserts seed entries
      return knex('messages').insert([
        {id: 1, sender_id: 1, receiver_id: 2, content: 'Hey'},
        {id: 2, sender_id: 1, receiver_id: 2, content: 'Are you there?'},
        {id: 3, sender_id: 1, receiver_id: 2, content: 'Plz respond'}
      ]);
    });
};
