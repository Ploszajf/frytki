import React, { Component } from 'react'

export class Score extends Component {
    render() {
        const style = {
            display: this.props.vis,
            position: 'absolute',
            top: 10,
            left: 10,
            height: 20 + 'px',
            zIndex: 15,
            fontSize: 30 + 'px'
        }
        return (
            <div style={style}>{this.props.children}</div >
        )
    }
}

export default Score;