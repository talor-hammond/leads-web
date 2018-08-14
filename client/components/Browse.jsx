import React, { Component } from 'react'

import LeadCard from './LeadCard'

class Browse extends Component {
    constructor(props) {
        super(props)

        this.state = {
            posts: [
                { title: 'EDA STUDENT GRADUATION', topic: 'Celebration!', description: 'Bring your friends and family for EDA students presentation and appreciation. There will be nibbles and beer so come along!! 5:30pm 26th July.', address: '275 Cuba Street', lat: -41.2969355, long: 174.7734782, user_id: 1, user_name: 'Ming' },
                { title: 'Need Jumper Leads', topic: 'Car Problems', description: 'Got a flat battery, if anyone has any jumper leads and would like to help, let me know.', address: '230 Cuba Street', lat: -41.2963787, long: 174.7688924, user_id: 2, user_name: 'brad2000' },
                { title: 'BBQ & Chill', topic: 'Event', description: 'MEAT, MEAT, MEAT!!! Come along for the hottest get together in town. Starts at 7pm', address: '200 Jackson Street', lat: -41.2962902, long: 174.772681, user_id: 3, user_name: 'jeff234' },
                { title: 'Yoga Session', topic: 'Event', description: 'Spiritual yoga session at Waitangi Park. Beginners welcome!. 6am sharp.', address: 'Waitangi Park', lat: -41.2919435, long: 174.7825271, user_id: 4, user_name: 'jessie12' },
                { title: 'Casual Conversations', topic: 'Socialise', description: 'Free your mind and talk with open minded people. @3pm', address: '73 Mairangi Road', lat: -41.2948087, long: 174.7747454, user_id: 5, user_name: 'sarah34' }
            ]
        }
    }

    render() {
        const { posts } = this.state

        return (
            <section className="content">
                <div className="container">
                    <h1 className="title">Browse</h1>

                    <div className="box">
                        <div className="field has-addons">
                            <div className="control is-expanded">
                                <input className="input" type="search" placeholder="Search pins in your area..." />
                            </div>
                            <div className="control">
                                <a className="button is-info">Search</a>
                            </div>
                        </div>
                    </div>

                    <div className="wrapper">
                        {
                            posts.map(post => {
                                return (
                                    <LeadCard
                                        title={post.title} 
                                        description={post.description}
                                        username={post.user_name}
                                        address={post.address}
                                    />
                                )
                            })
                        }
                    </div>

                </div>
            </section>
        )
    }
}

export default Browse