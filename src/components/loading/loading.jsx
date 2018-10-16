import './loading.scss'

import React, { Component } from 'react'

class Loading extends Component {
    render() {
        return (
            <div className='loader-wrapper'>
                <div className='loader'>Loading...</div>
            </div>
        )
    }
}

export default Loading