import './biblicalClass.scss'

import React, { Component } from 'react'

class BiblicalClass extends Component {
    render() {
        return (
            <div className='videos py-4 px-5'>
                <h1 className='mb-4'>Quer aprender sobre a bíblia?</h1>

                <div className='row'>
                    <ul>
                        <li>2ª - CVS - 20h</li>
                        <li>3ª - CVS - 19h</li>
                        <li>4ª - Escola - 19h</li>
                        <li>5ª - CVS - 09:30h</li>
                        <li>5ª - CVS - 16:00h</li>
                        <li>7º - Igreja - 09:00h</li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default BiblicalClass