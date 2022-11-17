import React, { Component } from 'react'

export class Fries extends Component {
    render() {
        const style = {
            position: 'absolute',
            top: this.props.top + 'vh',
            height: `calc(${this.props.height}vw + ${this.props.pxHeight}px)`,
            width: `calc(${this.props.width}vw + ${this.props.pxWidth}px)`,
            left: this.props.left + '%',
            zIndex: '11'
        }
        const imgStyle = {
            width: "100%",
            height: "100%"
        }
        return (
            <div style={style} >
                <img src={require("../images/fries1.png")} alt="" style={imgStyle}></img>
            </div>
        )
    }
}

export default Fries;
