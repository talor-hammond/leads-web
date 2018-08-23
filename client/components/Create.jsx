import React, { Component } from 'react'

// components
import CreateForm from './CreateForm'

class Create extends Component {
    render() {
        return (
            <section className="section">

                <div className="choose-categories">
                    <div className="container">
                        <h1 className="title is-1">Choose a category</h1>
                        <div className="columns categories">
                            <div className="column">
                                    <h1 className="title is-3">General</h1>
                                    <h2 className="subtitle">Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui consequatur repellat sint, accusamus perspiciatis fugit, doloribus alias cum neque soluta sed sunt nostrum eaque unde quisquam ratione ad quam voluptatem!</h2>
                            </div>
                            <div className="column">
                                    <h1 className="title is-3">Services</h1>
                                    <h2 className="subtitle">Have some skills to offer to the community? Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum veritatis voluptatum maiores sequi aliquid provident? Numquam quisquam ullam fuga laborum?</h2>
                            </div>
                            <div className="column">
                                    <h1 className="title is-3">Jobs</h1>
                                    <h2 className="subtitle">Think someone in the community might be able to help you with something? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quibusdam, nam?</h2>
                            </div>
                        </div>
                    </div>
                </div>

                {/* <CreateForm /> */}
            </section>
        )
    }
}

export default Create