import './carousel.scss'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import React, { Component } from 'react'
import Slider from 'react-slick'

import slide1 from './slides/slide-1.jpg'

class Carousel extends Component {
    static slides = [
        { slide: slide1 },
        { slide: slide1 }
    ]

    renderSlide = (slide, index) => {
        return (
            <div key={index}>
                <div style={{ backgroundImage: `url(${slide.slide})` }} className='slide' />
            </div>
        )
    }

    render() {
        const settings = {
            infinite: true,
            autoplay: true,
            autoplaySpeed: 5000,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: true
        }

        return (
            <Slider {...settings}>
                {Carousel.slides.map(this.renderSlide)}
            </Slider>
        )
    }
}

export default Carousel