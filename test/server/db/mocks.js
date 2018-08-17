export const fakePost = {
    category: 'general',
    title: 'Car broken down again',
    description: 'Tyre has gone flat again, don\'t have AA and would appreciate help from anyone in the area -- can pay $$',
    address: '275 Cuba Street, Wellington',
    lat: '-41.2969355',
    lng: '174.7734782',
    published: '19 August 2018, 2:01PM',
    user_id: 1
  }

export const fakeComment = {
    user_id: 2, 
    post_id: 1, 
    content: 'Here\s a fake comment'
}

// export const getPostsKeys = [
//     'post_id',
//     'user_id',
//     'username',
//     'address',
//     'lat',
//     'long',
//     'title',
//     'topic',
//     'description'
// ]

export const getGeneralPostsKeys = [
    'post_id',
    'category',
    'title',
    'description',
    'address',
    'lat',
    'lng',
    'published',
    'user_id',
    'user_name',
    'email',
    'avatar'
]