import './numberOne.scss'

import React, { Component } from 'react'

class NumberOne extends Component {
    render() {
        return (
            <div className='number-one shadow'>
                <h5 className='number-text text-uppercase bg-black text-white p-1 font-weight-bold text-nowrap'>O Número</h5>
                <h6 className='number-number bg-black text-white font-weight-bold text-center m-0'>1</h6>
            </div>
        )
    }
}

export default NumberOne