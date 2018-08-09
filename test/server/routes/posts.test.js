const server = require('../../../server/server')
const request = require('supertest')(server)

const url = '/api/posts'

// mock dependencies
jest.mock('../../../server/db/posts', () => ({ // our 'mock' posts database:
    // addPost,
    // getPosts: jest.fn(),
    getPosts: () => Promise.resolve([
        {
            id: 1,
            address: '1 Airlie Road, Plimmerton',
            lat: -41.073070,
            long: 174.857012,
            title: 'Need lemons, urgently',
            description: 'Making lemonade and have no lemons smh',
            user_id: 1
        },
        {
            id: 2,
            address: '1 Airlie Road, Plimmerton',
            lat: -41.073070,
            long: 174.857012,
            title: 'Also need sugar',
            description: 'Just realised, cheers',
            user_id: 1
        }
    ]),
    getPostByPostId: (id) => id
    ? Promise.resolve({
            id,
            address: '1 Airlie Road, Plimmerton',
            lat: -41.073070,
            long: 174.857012,
            title: 'Also need sugar',
            description: 'Just realised, cheers',
            user_id: 1
    })
    : Promise.reject('Error; post not found')
    // deletePostById,
    // getPostsByUserId
  }))

// tests --
describe('posts route tests', () => {

    // getPosts
    describe('GET /api/posts', () => {
        
        it('returns the right length of data, i.e. all posts', () => {
            return request
                .get(url)
                .expect(200)
                .then(res => {
                    const posts = res.body

                    expect(posts).toHaveLength(2)
                })
        })
    
    })

    describe('GET /api/posts/post/:id', () => {

        it('returns the correct post', () => {
            const id = 2

            return request
                .get(url + '/post/' + id)
                .expect(200)
                .then(res => {
                    const post = res.body

                    expect(post).toBeDefined()
                    expect(post.id).toBe(String(id))
                    // assertion around mock object may be better?
                })
        })

    })

})