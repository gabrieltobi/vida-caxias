import './video.scss'

import React, { Component } from 'react'

class Videos extends Component {
    render() {
        return (
            <div className='videos py-4 px-5 text-center'>
                <h1 className='mb-4'>Você conhece o 22 de Outubro?</h1>

                <div className='embed-responsive embed-responsive-16by9 video'>
                    <iframe className='embed-responsive-item' src='https://www.youtube.com/embed/cVw6NmZrYYw' allowFullScreen></iframe>
                </div>
            </div>
        )
    }
}

export default Videos