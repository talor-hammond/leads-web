const server = require('../../../server/server')
const request = require('supertest')(server)

const url = '/api/posts'

// mock dependencies
jest.mock('../../../server/db/posts', () => ({ // our 'mock' posts database:
    // addPost,
    // getPosts: jest.fn(),
    getPosts: () => Promise.resolve([
        {
            
            lat: 1,
            long: 1
        }
    ]),
    // getPostByPostId,
    // deletePostById,
    // getPostsByUserId
  }))

// tests --
describe('posts route tests', () => {

    // getPosts
    describe('GET /api/posts', () => {
        
        it('returns the right type of data', () => {
            // getPosts.mockImplementation(() => Promise.resolve())

            return request
                .get(url)
                .expect(200)
                .then(res => {
                    const posts = res.body

                    expect(posts.length).toBe(1)
                })
        })
    
    })

})