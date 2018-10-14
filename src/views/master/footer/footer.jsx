import './footer.scss'

import React, { Component } from 'react'
//import logo from '../../images/logo.png'

class Footer extends Component {
    render() {
        return (
            <footer className='bg-dark text-white text-center p-4'>
                NE ©‎ {new Date().getFullYear()}
            </footer >
        )
    }
}

export default Footer