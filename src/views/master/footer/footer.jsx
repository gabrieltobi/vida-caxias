import './footer.scss'

import React, { Component } from 'react'

class Footer extends Component {
    render() {
        return (
            <footer className='bg-dark text-white text-center p-4'>
                Vida Caxias ©‎ {new Date().getFullYear()}
            </footer >
        )
    }
}

export default Footer