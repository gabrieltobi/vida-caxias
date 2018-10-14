import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'react-toastify/dist/ReactToastify.css'
import './master.scss'

import Home from './views/home/home'
import Contato from './views/contato/contato'
import Master from './views/master/master'

class Root extends Component {
    render() {
        return (
            <Router>
                <React.Fragment>
                    {/* Páginas fora da master */}

                    <Master>
                        <Route exact path="/" component={Home} />
                        <Route path="/contato" component={Contato} />
                    </Master>
                </React.Fragment>
            </Router>
        )
    }
}

export default Root