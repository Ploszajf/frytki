import React, { Component } from 'react'
import background from '../images/background.jpg'
export class Background extends Component {
    render() {

        const style = {
            display: 'flex',
            justifyContent: 'center',
            widty: 100 + '%',
            height: 100 + 'vh',
            backgroundImage: `url(${background})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'

        }

        return (
            <div style={style}>{this.props.children}</div >
        )
    }
}

export default Background;
