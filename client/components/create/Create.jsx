import React, { Component } from 'react'

import scrollToComponent from 'react-scroll-to-component'

// components
import CreateForm from './CreateForm'

class Create extends Component {
    constructor(props) {
        super(props)

        this.state = {
            categorySelected: false
        }

        this.select = this.select.bind(this)
        this.handleScrollToForm = this.handleScrollToForm.bind(this)
        this.handleScrollToTop = this.handleScrollToTop.bind(this)
        this.handleRedirect = this.handleRedirect.bind(this)
    }

    select() {
        this.setState({ categorySelected: true }, () => { // setState is async; thus, need to handle scrolling to the ref after
            this.handleScrollToForm()                     // the "form" ref has been rendered -- we can do this by passing
        })                                                // the scrolling method as a callback
    }

    handleScrollToForm() {
        scrollToComponent(this.refs.form, {
            offset: 0,
            align: 'top',
            duration: 800
        })
    }

    handleScrollToTop() {
        scrollToComponent(this.refs.top, {
            offset: -200,
            align: 'top',
            duration: 800
        })
    }

    handleRedirect() {
        this.props.history.push('/browse')
    }

    render() {
        const { categorySelected } = this.state

        return (
            <section ref="top" className="section">

                <div className="choose-categories">
                    <div className="container">
                        <h1 className="title is-1">Choose a category</h1>
                        <div className="columns categories">
                            <div className="column category general" onClick={() => this.select()}>
                                <h1 className="title is-3">General</h1>
                                <h2 className="subtitle">Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui consequatur repellat sint, accusamus perspiciatis fugit, doloribus alias cum neque soluta sed sunt nostrum eaque unde quisquam ratione ad quam voluptatem!</h2>
                            </div>
                            <div className="column category services" onClick={() => this.select()}>
                                <h1 className="title is-3">Services</h1>
                                <h2 className="subtitle">Have some skills to offer to the community? Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum veritatis voluptatum maiores sequi aliquid provident? Numquam quisquam ullam fuga laborum?</h2>
                            </div>
                            <div className="column category jobs" onClick={() => this.select()}>
                                <h1 className="title is-3">Jobs</h1>
                                <h2 className="subtitle">Think someone in the community might be able to help you with something? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quibusdam, nam?</h2>
                            </div>
                        </div>
                    </div>
                </div>

                    {categorySelected && (
                        <CreateForm top={this.handleScrollToTop} ref="form" handleRedirect={this.handleRedirect} />
                    )}

            </section>
        )
    }
}

export default Create