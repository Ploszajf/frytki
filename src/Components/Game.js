import React, { Component } from 'react'

export class Game extends Component {
    render() {

        const style = {
            height: 100 + '%',
            width: 100 + '%',
            display: this.props.vis
        }

        return (
            <div style={style}>{this.props.children}</div>
        )
    }
}

export default Game;