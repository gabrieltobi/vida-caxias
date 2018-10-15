import './nav.scss'

import React, { Component } from 'react'
import NumberOne from '../numberOne/numberOne'
import JesusChrist from '../jesusChrist/jesusChrist'

import christ from '../../../images/christ.jpg'

class Nav extends Component {
    static menuItems = [
        { name: 'Início', href: '/' },
        { name: 'Contato', href: '/contato' }
    ]

    renderMenuItem = (menuItem) => {
        const pathname = window.location.pathname

        return (
            <a key={menuItem.name} className={`nav-item nav-link ${pathname === menuItem.href ? 'active' : ''}`} href={menuItem.href}>
                {menuItem.name}
            </a>
        )
    }

    render() {

        return (
            <nav className='navbar shadow-sm flex-column justify-content-start text-white' style={{ backgroundImage: `url(${christ})` }}>
                <div className="phrase text-center p-3 mb-4">
                    <h3 className='text-uppercase font-weight-bold m-0'>O Único Salvador</h3>
                </div>

                <div className="items d-flex align-items-start w-100 p-4 container">
                    <div className="start">
                        <JesusChrist />
                    </div>

                    <div className="end">
                        <NumberOne />
                    </div>
                </div>
                {/* <a className='navbar-brand' href='/'>
                    <img src='https://files.adventistas.org/esperanca/2018/04/logo_esperanca.png' alt='Logo do Vida Caxias' />
                </a> */}
            </nav>
        )
    }
}

export default Nav