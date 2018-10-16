import './links.scss'

import React, { Component } from 'react'
import Modal from './modal/modal'

class Links extends Component {
    state = {
        modalOpen: false,
        modalTitle: ''
    }

    links = [
        { label: 'Quero uma palavra amiga' },
        { label: 'Quero conhecer o Salvador' },
        { label: 'Quero estudar digitalmente' },
        { label: 'Quero falar com alguém' }
    ]

    renderModal = () => {
        if (!this.state.modalOpen) return

        return (
            <Modal
                closeModal={() => {
                    this.setState({ modalOpen: false })
                    document.body.style.overflow = 'auto'
                }}
                title={this.state.modalTitle}
            />
        )
    }

    renderLink = (link, index) => {
        return (
            <button
                key={index}
                className='list-group-item my-2 w-100 text-left'
                onClick={() => {
                    this.setState({ modalOpen: true, modalTitle: link.label })
                    document.body.style.overflow = 'hidden'
                }}>
                <h3>{link.label}</h3>
            </button>
        )
    }

    render() {
        return (
            <div className='links py-4 px-5'>
                <h1 className='mb-4 text-center py-3 bg-dark text-light'>Precisa de algo?</h1>

                {this.links.map(this.renderLink)}

                {this.renderModal()}
            </div>
        )
    }
}

export default Links