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
    content: 'Testing, testing'
}

export const fakeUpdatedComment = {
    id: 2,
    user_id: 2,
    post_id: 1,
    content: 'Can I bring my uncle bobbo? Edit: nvm he can\'t come'
}

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