import './home.scss'

import React, { Component } from 'react'
import Carousel from './carousel/carousel'
import Video from './video/video'
import Suggestions from './suggestions/suggestions'
import BiblicalClass from './biblicalClass/biblicalClass'

class Home extends Component {
    render() {
        return (
            <div className='view-home'>
                {/* <Carousel /> */}
                {/* <Video /> */}
                <Suggestions />
                {/* <BiblicalClass /> */}
            </div>
        )
    }
}

export default Home