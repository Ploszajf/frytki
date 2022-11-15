import React, { Component } from 'react'

export class Player extends Component {
    render() {
        const style = {
            position: 'absolute',
            height: this.props.height + 'vw',
            width: this.props.width + 'vw',
            top: this.props.top + 'vh',
            left: this.props.left + '%'
        };
        const imgStyle = {
            width: 100 + '%',
            height: 100 + '%',
        }

        return (
            <div style={style}>
                <img src={require("../images/MC_box.png")} alt="" style={imgStyle}></img>
            </div>
        )
    }
}

export default Player;