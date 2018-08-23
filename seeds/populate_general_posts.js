
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('general_posts').del()
    .then(function () {
      // Inserts seed entries
      return knex('general_posts').insert([
        {
          category: 'general',
          title: 'Car broken down',
          description: 'Tyre has gone flat, don\'t have AA and would appreciate help from anyone in the area -- can pay $$',
          region: 'Wellington',
          address: '275 Cuba Street, Wellington',
          lat: '-41.2969355',
          lng: '174.7734782',
          user_id: 1
        },
        {
          category: 'general',
          title: 'Need help moving furniture',
          description: 'Is anyone willing to give me a hand moving some furniture out of my flat tomorrow? If you have an hour or two spare (and even better, a van); will pay handsomely $$$',
          region: 'Wellington',
          address: '230 Cuba Street, Wellington',
          lat: '-41.2963787',
          lng: '174.7688924',
          user_id: 2
        },
        {
          category: 'general',
          title: 'Hole in wall @flat! Urgent',
          description: 'Flat party last night and someone (not me) put a hole in the wall (pictured)! If you think you\'d be able to fix it, flick us a line ASAP -- $$$ on offer',
          address: '73 Mairangi Road',
          region: 'Wellington',
          lat: '-41.2948087',
          lng: '174.7747454',
          user_id: 2
        }
      ]);
    });
};
