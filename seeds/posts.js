
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('posts').del()
    .then(function () {
      // Inserts seed entries
      return knex('posts').insert([
        { title: 'EDA STUDENT GRADUATION', topic: 'Celebration!', description: 'Bring your friends and family for EDA students presentation and appreciation. There will be nibbles and beer so come along!! 5:30pm 26th July.', lat: -41.2969355, long: 174.7734782, user_id: 1 },
        { title: 'Need Jumper Leads', topic: 'Car Problems', description: 'Got a flat battery, if anyone has any jumper leads and would like to help, let me know.', lat: -41.2963787, long: 174.7688924, user_id: 2 },
        { title: 'BBQ & Chill', topic: 'Event', description: 'MEAT, MEAT, MEAT!!! Come along for the hottest get together in town. Starts at 7pm', lat: -41.2962902, long: 174.772681, user_id: 3 },
        { title: 'Yoga Session', topic: 'Event', description: 'Spiritual yoga session at Waitangi Park. Beginners welcome!. 6am sharp.', lat: -41.2919435, long: 174.7825271, user_id: 4 },
        { title: 'Casual Conversations', topic: 'Socialise', description: 'Free your mind and talk with open minded people. @3pm', lat: -41.2948087, long: 174.7747454, user_id: 5 }
      ]);
    });
};
