import './nav.scss'

import React, { Component } from 'react'
//import logo from '../../images/logo.png'

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
            <nav className='navbar navbar-expand navbar-light bg-light border-bottom shadow-sm'>
                <a className='navbar-brand' href='/'>
                    <img src='https://files.adventistas.org/esperanca/2018/04/logo_esperanca.png' alt='Logo do Vida Caxias' />
                </a>

                <div className='collapse navbar-collapse'>
                    <div className='navbar-nav'>
                        {Nav.menuItems.map(this.renderMenuItem)}
                    </div>
                </div>
            </nav>
        )
    }
}

export default Nav