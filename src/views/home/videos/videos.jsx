import './videos.scss'

import React, { Component } from 'react'

class Videos extends Component {
    videos = [
        { src: 'https://www.youtube.com/embed/GsJR4rRldgo', label: 'Problema na família?' },
        { src: 'https://www.youtube.com/embed/uymMkRPZnlM', label: 'Problema financeiro?' },
        { src: 'https://www.youtube.com/embed/2kDoGdnbnGs', label: 'Se sentindo sozinho?' }
    ]

    renderVideo = (video, index) => {
        return (
            <React.Fragment key={index}>
                <div className='col-lg-4 col-md-6 col-xs-12'>
                    <div>{video.label}</div>
                    <div className='embed-responsive embed-responsive-16by9'>
                        <iframe className='embed-responsive-item' src={video.src} allowFullScreen></iframe>
                    </div>
                </div>
            </React.Fragment>
        )
    }

    render() {
        return (
            <div className='videos py-4 px-5'>
                <h1 className='mb-4'>Vídeos Interessantes</h1>

                <div className='row'>
                    {this.videos.map(this.renderVideo)}
                </div>
            </div>
        )
    }
}

export default Videos