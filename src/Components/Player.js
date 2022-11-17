import React, { Component } from 'react'

export class Player extends Component {
    render() {
        const style = {
            position: 'absolute',
            height: `calc(${this.props.height}vw + ${this.props.pxHeight}px)`,
            width: `calc(${this.props.width}vw + ${this.props.pxWidth}px)`,
            top: this.props.top + 'vh',
            left: this.props.left + '%'
        };
        const imgStyle = {
            width: 100 + '%',
            height: 100 + '%',
            zIndex: '10',
            position: 'absolute',
            top: '0'
        }
        const imgStyle2 = {
            width: 100 + '%',
            height: 110 + '%',
            zIndex: '12',
            position: 'absolute',
            top: '-10%'
        }

        return (
            <div style={style}>
                <img src={require("../images/MC_box.png")} alt="" style={imgStyle}></img>
                <img src={require("../images/MC_box_front.png")} alt="" style={imgStyle2}></img>

            </div>
        )
    }
}

export default Player;
