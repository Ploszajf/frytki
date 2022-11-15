import React, { Component } from 'react'

export class StartingScreen extends Component {
    render() {
        const style = {
            position: 'absolute',
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: 'rgba(52, 52, 52, 0.4)',
            zindex: 20,
            display: this.props.vis,
            justifyContent: 'center',
            alignItems: 'center',
            flexWrap: 'wrap'
        }
        return (
            <div style={style}>{this.props.children}</div>
        )
    }
}

export default StartingScreen;