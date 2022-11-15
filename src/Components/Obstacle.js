import React, { Component } from 'react'

export class Obstacle extends Component {
    render() {
        const style = {
            position: 'absolute',
            top: this.props.top + 'vh',
            width: this.props.width + '%',
            height: this.props.height + 'px',
            left: this.props.left + '%',
            border: '3px solid red',
            boxSizing: 'border-box'
        }
        const imgStyle = {
            width: "100%",
            height: "100%"
        }
        return (
            <div style={style} >
                <img src={require("../images/ogien21.png")} alt="" style={imgStyle}></img>
            </div>
        )
    }
}

export default Obstacle;
