import React, { Component } from 'react'
import Carousel from './carousel/carousel'
import Video from './video/video'
import Videos from './videos/videos'
import BiblicalClass from './biblicalClass/biblicalClass'

class Home extends Component {
    render() {
        return (
            <React.Fragment>
                <Carousel />
                <Video />
                <Videos />
                <BiblicalClass />
            </React.Fragment>
        )
    }
}

export default Home