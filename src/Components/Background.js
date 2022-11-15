import React, { Component } from 'react'

export class Background extends Component {
    render() {

        const style = {
            display: 'flex',
            justifyContent: 'center',
            widty: 100 + '%',
            height: 100 + 'vh',
            backgroundImage: 'url("https://via.placeholder.com/500")'

        }

        return (
            <div style={style}>{this.props.children}</div >
        )
    }
}

export default Background;