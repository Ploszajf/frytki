import React, { Component } from 'react'

export class FinalScore extends Component {
    render() {
        const style = {
            position: 'absolute',
            top: 40 + '%',
            left: 'calc( 50% - 25vw )',
            zIndex: 10,
            width: 50 + 'vw',
            fontSize: 20 + 'px',
            textAlign: 'center',
            display: this.props.vis
        }
        return (
            <div style={style}>{this.props.children}</div >
        )
    }
}

export default FinalScore;